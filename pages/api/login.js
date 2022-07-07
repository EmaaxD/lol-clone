import bcrypt from "bcryptjs";

import connectDB from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const verifyUsername = await User.findOne({
          username: req.body.username,
        });
        console.log("verifyUsername", verifyUsername);

        console.log("req", req.body);

        if (!verifyUsername) {
          return res.status(400).json({
            success: false,
            error: "El usuario o contraseña Invalida",
          });
        }

        const verifyPassword = await bcrypt.compare(
          req.body.password,
          verifyUsername.password
        );

        if (verifyPassword) {
          delete verifyUsername.password;

          return res.json({
            success: true,
            user: {
              id: verifyUsername._id,
              email: verifyUsername.email,
              username: verifyUsername.username,
            },
          });
        } else {
          return res
            .status(400)
            .json({ success: false, error: "Error al ingresar datos" });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      return res
        .status(500)
        .json({ success: false, error: "Error del servidor " });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcryptjs";

import connectDB from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  await connectDB();

  // POST api/user

  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const verifyUsername = await User.findOne({
          username: req.body.username,
        });
        const verifyEmail = await User.findOne({ email: req.body.email });

        if (verifyUsername || verifyEmail) {
          return res
            .status(400)
            .json({
              success: false,
              error:
                "El usuario o email no esta disponible, intenta otro por favor",
            });
        }

        const user = {
          ...req.body,
          password: await bcrypt.hash(req.body.password, 12),
        };

        const createdUser = new User(user);
        await createdUser.save();

        return res.json({ success: true, user: createdUser });
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

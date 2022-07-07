export const validationString = (string) =>
  new Promise((resolve, reject) => {
    if (string.trim() === "") {
      reject({ message: "Todos los campos son requeridos" });
      return;
    }

    if (/(<[a-z>(')/<]*)/.exec(string)) {
      reject({ message: "No se aceptan caracteres especiales" });
      return;
    }

    resolve(string.trim().toLowerCase());
  });

export const comparationsPasswords = (pass1, pass2) =>
  new Promise((resolve, reject) => {
    if (pass1 === pass2) {
      resolve(true);
    } else {
      reject({ message: "Las contraseñas no coinciden " });
    }
  });


export const saveUser = (
  id,
  username,
  contrasena
) => new Promise(
  resolve => setTimeout(
    () => resolve({
      id,
      username,
      contrasena
    }),
  ),
);
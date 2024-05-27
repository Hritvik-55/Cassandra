export const validateEmailPassword = (email, password) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(
      password
    );

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password must contain minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";

  return null;
};

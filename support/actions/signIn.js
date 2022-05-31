import login from "../../pages/Login";
import credentials from "../../Data/UserCredentials";

export default (pass, email) => {
  const password = pass

    ? credentials.find(creds => creds.email === email).password: "randomPassword";

  login.signIn(email, password);
};

import { Given,When ,Then,And } from "cucumber";
import signIn from "../../support/actions/signIn";

When(/^the user logged to website useing "(valid|invalid)" credentials, "(.*)" to login$/,(valid, email) => {
    signIn(valid === "valid" ? true : false, email);
  }
);

import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError(errorMessage);
});

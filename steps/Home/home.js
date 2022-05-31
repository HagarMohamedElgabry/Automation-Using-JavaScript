import { Given } from "cucumber";
import goToPage from "../../support/actions/goToPage";

Given(/^the browser is at the "(Home|Login)" page$/, page => {
  goToPage(page);
});

import { When } from "cucumber";
import search from "../../support/actions/search";
import clickMenuOption from "../../support/actions/clickMenuOption";

When(/^the user searches for "(.*)"$/, keyword => {
  search(keyword);
});

When(/^the user clicks on the "(.*)" option in the menu$/, option => {
  clickMenuOption(option);
});

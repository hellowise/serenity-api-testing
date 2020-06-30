import { equals } from "@serenity-js/assertions";
import { actorCalled, actorInTheSpotlight } from "@serenity-js/core";
import { After, Before, Then, When } from "cucumber";
import { LoginWithValidCredentials } from "../support/screenplay";

When(
  /(.*) logs into rocket chat using valid credentials$/,
  (actorName: string) => {
    return actorCalled(actorName).attemptsTo(LoginWithValidCredentials());
  }
);

Then(/s?he should successfully be authorized in the application$/, () => {
  return actorInTheSpotlight()
    .attemptsTo
    //See.if(ResponseMessage(), hasDadJoke()),
    ();
});

Then(/s?he should be online$/, () => {
  return actorInTheSpotlight()
    .attemptsTo
    //pending
    ();
});

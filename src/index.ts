import "dotenv/config";
import { App } from "@slack/bolt";

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
    await app.start(6969);
    console.log("app is online!");
})();

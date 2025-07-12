import "dotenv/config";
import { App } from "@slack/bolt";

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.event("app_mention", async ({ event, say }) => {
    await say({ text: "hi world!", thread_ts: event.ts });
});

await app.start();
console.log("app is online!");

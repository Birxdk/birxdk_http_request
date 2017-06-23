const https = require("https");

const token = process.env["API_TOKEN"];
const url = process.env["API_URL"];

function callAPI(url, token) {
    console.log(`Request api url ${url}`);
    https.get(`${url}?token=${token}`, (res) => {
        res.on("data", (data) => {
            console.log("Data returned stopping process");
            process.exit();
        });
    }).on("error", err => {
        console.error("Error");
        console.error(data);
    });
}
callAPI(url, token);

// API_TOKEN=abcdeftoken API_URL=https://blabla node ./apirequest.js
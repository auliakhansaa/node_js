const os = require("os");
const fs = require("fs");
const { stringify } = require("querystring");

function memories(data) {
    fs.writeFileSync("./tugaswrite.json",JSON,stringify(data));
    
}

memories({
    platform: os.platform(),
    memori: os.freemem()
});
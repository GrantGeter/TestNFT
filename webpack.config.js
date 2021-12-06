const path = require('path');

module.exports = {
    entry: ["./public/src/main.js", "./public/src/ui.js"],
    output: {
        path: path.resolve(__dirname + "/public", 'dist')
    }
}
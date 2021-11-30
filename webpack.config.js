const path = require('path');

module.exports = {
    entry: ["./public/src/index.js", "./public/src/ui.js"],
    output: {
        path: path.resolve(__dirname + "/public", 'dist')
    }
}
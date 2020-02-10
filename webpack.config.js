const path = require('path');

module.exports = {
    entry: './js/script.js'
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    }
};
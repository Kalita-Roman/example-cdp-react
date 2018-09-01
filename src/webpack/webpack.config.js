const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        path: path.join(__dirname, '../client/bundle'),
        filename: 'bundle.js',
    },
    mode: 'none',
};
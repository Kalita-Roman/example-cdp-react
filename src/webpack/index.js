import webpack from 'webpack';
import config from './webpack.config.js';

webpack(config, (error) => {
    if (error) {
        console.error(error);
    }
});
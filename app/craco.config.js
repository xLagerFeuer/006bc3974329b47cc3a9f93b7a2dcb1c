const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        configure: (webpackConfig, { env, paths }) => {
            paths.appIndexJs = path.resolve(__dirname, 'src/main.tsx');
            webpackConfig.entry = path.resolve(__dirname, 'src/main.tsx');
            return webpackConfig;
        },
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
};
import postcssPurgecss from '@fullhuman/postcss-purgecss';

export default {
    plugins: [
        postcssPurgecss({
            content: [
                './index.html',
                './src/**/*.jsx',
                './src/**/*.js'
            ],
            safelist: ['dark-mode', 'light-mode', 'dim-mode', 'unico-mode', 'default-only', 'unico-only']
        })
    ]
};


export default [{
        root: true,
        env: {
            browser: true,
            es2021: true,
            node: true,
            'vue/setup-compiler-macros': true
        },
        ignorePatterns: ["dist", "node_modules"],
        extends: [
            'eslint:recommended',
            // 'plugin:vue/vue3-essential',
            // '@vue/eslint-config-typescript/recommended',
            // 'plugin:@typescript-eslint/recommended',
            // 'prettier',
        ],
        parserOptions: {
            ecmaVersion: 'latest',
            parser: '@typescript-eslint/parser',
            sourceType: 'module',
        },
        plugins: [
            'vue',
            '@typescript-eslint',
        ],
         rules: {
              'vue/multi-word-component-names': 'off',
            //  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        }
    }];
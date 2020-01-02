module.exports = {
    env: {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "prettier",
        // "jest"
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier/@typescript-eslint",
        'plugin:prettier/recommended',
        // "plugin:jest/recommended",
    ],
    rules: {
        "prettier/prettier": "error",
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
}

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "import", "jsx-a11y", "prettier"],
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    rules: {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                tsx: "never",
                scss: "always"
            }
        ]
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
            }
        }
    }
};

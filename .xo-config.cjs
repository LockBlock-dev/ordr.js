/** @type {import("xo").Options} */
module.exports = {
    prettier: true,
    space: 4,
    rules: {
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface",
        ],
        "unicorn/prevent-abbreviations": "off",
        "unicorn/prefer-event-target": "off",
    },
    ignores: ["typedoc.config.cjs"],
};

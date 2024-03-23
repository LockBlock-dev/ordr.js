/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["./src/client.ts", "./src/types/**/*.ts"],
    excludePrivate: true,
    excludeInternal: true,
    excludeExternals: true,
    githubPages: false,
    includeVersion: true,
    out: "docs",
    plugin: ["typedoc-plugin-markdown"],
    readme: "none",
};

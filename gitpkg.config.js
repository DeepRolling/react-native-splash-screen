// Example content of gitpkg.config.js
module.exports = () => ({
    getTagName: (pkg) => `smartTinyGrid-v${pkg.version}-gitpkg`,
});

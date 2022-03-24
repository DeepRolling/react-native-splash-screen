// Example content of gitpkg.config.js
module.exports = () => ({
    getTagName: (pkg) => `beezo-v${pkg.version}-gitpkg`,
});

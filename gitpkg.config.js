// Example content of gitpkg.config.js
module.exports = () => ({
    getTagName: (pkg) => `greendev-v${pkg.version}-gitpkg`,
});

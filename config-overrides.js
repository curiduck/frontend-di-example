const { override, useBabelRc, addDecoratorsLegacy } = require("customize-cra");

module.exports = override([useBabelRc(), addDecoratorsLegacy()]);

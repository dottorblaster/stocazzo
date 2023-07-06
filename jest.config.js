module.exports = {
  rootDir: ".",
  testMatch: ["**/*.test.(ts|tsx|js|jsx)"],
  verbose: true,
  clearMocks: true,
  resetModules: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__tests__/",
    "/(__)?mock(s__)?/",
    "/__jest__/",
    ".?.min.js",
    "/test/"
  ],
  moduleDirectories: ["node_modules", "lib"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["cjs", "js", "jsx", "json", "ts"]
};

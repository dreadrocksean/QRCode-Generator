module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom", // Recommended for React
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy", // for CSS Modules
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // for global styles
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js", // for SVGs
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // preset: "ts-jest",
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "./tsconfig.app.json", // ✅ or ./tsconfig.test.json if separated
  //   },
  // },
};

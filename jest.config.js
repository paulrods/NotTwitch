module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each",
  ],
  moduleFileExtensions: ["css", "js", "json", "jsx"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/build", "<rootDir>/assets"],
};

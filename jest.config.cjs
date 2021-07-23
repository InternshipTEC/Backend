module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns : [
    "<rootDir>/dist/database/",
    "<rootDir>/dist/config.js",
    "<rootDir>/dist/ormconfig.js",
    "<rootDir>/src/database/",
    "<rootDir>/src/config.ts",
    "<rootDir>/src/ormconfig.ts",
  ],
  setupFiles: ["<rootDir>/src/test/setup.ts"]
}
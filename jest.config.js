'use strict'

module.exports = {
  // Map file extensions to module loaders
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  
  // Use ts-jest for TypeScript files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  
  // Specify the test environment
  testEnvironment: 'node',
  
  // Define the directories containing test files
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
  
  // Optional: Collect test coverage
  collectCoverage: true,
  
  // Optional: Set the coverage directory
  coverageDirectory: 'coverage',
  
  // Optional: Configure the threshold for test coverage
  // This example sets the minimum coverage to 80%
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};


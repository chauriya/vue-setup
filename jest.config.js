module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  setupFiles: ['./jest.setup.js']
};

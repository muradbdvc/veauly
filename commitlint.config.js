module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always'],
    'scope-case': [2, 'never'],
    'subject-max-length': [2, 'always', 100],
  },
};
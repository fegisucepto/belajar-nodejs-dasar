const { scanner } = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    options: {
      'sonar.organization': 'your-organization-key', // Ganti dengan organization key Anda
      'sonar.projectKey': 'your-project-key',        // Ganti dengan project key unik
      'sonar.projectName': 'Nama Project Anda',
      'sonar.sources': '.',
      'sonar.tests': '__tests__',
      'sonar.test.inclusions': '**/*.test.js,**/*.spec.js',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'node_modules/**,**/*.test.js,**/*.spec.js,coverage/**,dist/**',
    },
  },
  () => process.exit()
);
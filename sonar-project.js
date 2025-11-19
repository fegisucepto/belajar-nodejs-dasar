const scanner = require('sonarqube-scanner').default;

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    options: {
      'sonar.organization': 'fegisucepto', // Ganti dengan organization key Anda
      'sonar.projectKey': 'fegisucepto_belajar-nodejs-dasar', // Ganti dengan project key unik
      'sonar.projectName': 'belajar-nodejs-dasar',
      'sonar.sources': '.',
      'sonar.tests': '__tests__',
      'sonar.test.inclusions': '**/*.test.js,**/*.spec.js',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'node_modules/**,**/*.test.js,**/*.spec.js,coverage/**,dist/**,**/__tests__/**',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml'
    },
  },
  () => process.exit()
);
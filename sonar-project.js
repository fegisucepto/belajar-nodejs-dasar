const scanner = require('sonarqube-scanner').default;

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: process.env.SONAR_TOKEN,  // Gunakan token dari environment variable
    options: {
      'sonar.organization': 'fegisucepto',
      'sonar.projectKey': 'fegisucepto_belajar-nodejs-dasar',
      'sonar.projectName': 'belajar-nodejs-dasar',
      'sonar.sources': '.',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.exclusions': 'node_modules/**,**/*.test.js,**/*.spec.js,coverage/**,dist/**,**/__tests__/**,**/test/**',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      'sonar.scm.disabled': 'true',
      'sonar.scm.provider': 'git',
      'sonar.scm.exclusions.disabled': 'true',
      'sonar.qualitygate.wait': 'true'  // Tunggu hasil quality gate
    },
  },
  () => process.exit()
);
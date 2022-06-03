const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl : 'http://172.31.21.239:9000/',
    options: {
      'sonar.projectName': 'This is node js app',
      'sonar.projectDescription': 'Description for "This is node js app" project...',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'Thiru@143',
      //'sonar.tests': 'specs',
      'sonar.language' : 'js',
      'sonar.projectVersion': '1.0'
    },
  },
  () => process.exit()
);
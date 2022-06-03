pipeline{
    agent{
        label "nodejs"
    }
    stages{
        stage('source code'){
            steps{
                git url:'https://github.com/thiru9880/thiru-nodejs.git', 
                    branch: 'main'
            }
        }
        stage('Build the code'){
            steps{
                // sh 'rm -rf *.tar.gz'
                nodejs(nodeJSInstallationName: 'nodejs12.22.9')
                sh 'npm install'
                // sh 'tar czf thirunode-$BUILD_NUMBER.tar.gz node_modules package.json LICENSE.md  '
            }
        }
        stage('test'){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs12.22.9')
                sh 'npm test'
            }    
        }
        //  stage('repots'){
        //      steps{
        //         "testResultsProcessor":"coverage/*.xml"
        //      }
        //  }
           
            }
        }
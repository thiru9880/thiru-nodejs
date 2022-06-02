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
                sh 'npm ci'
                // sh 'rm -rf *.tar.gz'
                sh 'npm install-ci-test'
                // sh 'tar czf thirunode-$BUILD_NUMBER.tar.gz node_modules package.json LICENSE.md  '
                sh 'npm build'
            }
        }
        stage('test'){
            steps{
                sh 'npm install --save-dev jest'
                sh 'npm test'
            }    
        }
        // stage('repots'){
        //     steps{
        //         testResultsProcessor: 'jest-junit'
        //     }
        // }
           
            }
        }
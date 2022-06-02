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
                sh 'npm install'
                // sh 'tar czf thirunode-$BUILD_NUMBER.tar.gz node_modules package.json LICENSE.md  '
                sh 'npm run build --if-present'
            }
        }
        stage('test'){
            sh 'npm test'
        }
           
            }
        }
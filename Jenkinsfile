pipeline {
    agent any
    stages {
        stage('Frontend build') {
            steps {
                echo 'building reactjs'
                dir("Frontend") {   
                    bat 'npm cache clean --force'
                    bat 'npm install --force' 
                }
            }
        }
        stage('Backend build') {
            tools{
                maven 'maven_3_9_1'
            }
            steps {
                echo 'building addTocart springboot'
                dir("Backend/addToCart") {
                    bat 'mvn clean install'
                }
            }
            steps {
                echo 'building productdetails springboot'
                dir("Backend/productdetailsservice") {
                    bat 'mvn clean install'
                }
            }
        }
    }
}

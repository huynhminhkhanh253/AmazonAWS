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
        stage('AddToCart Api build') {
            tools{
                maven 'maven_3_9_1'
            }
            steps {
                echo 'building addTocart springboot'
                dir("Backend/addToCart") {
                    bat 'mvn clean install'
                }
            }
        }
        stage('ProductDetails Api build') {
            tools{
                maven 'maven_3_9_1'
            }
            steps {
                echo 'building ProducDetails springboot'
                dir("Backend/productdetailsservice") {
                    bat 'mvn clean install'
                }
            }
        }
    }
}

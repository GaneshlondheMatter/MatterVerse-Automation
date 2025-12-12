pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/GaneshlondheMatter/MatterVerse-Automation.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run android'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'allure-results/**', fingerprint: true
            }
        }
    }
}

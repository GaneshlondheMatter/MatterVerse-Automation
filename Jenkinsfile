pipeline {
    agent any

    environment {
        ANDROID_HOME = "C:/Users/ganesh.londhe/AppData/Local/Android/Sdk"
        PATH = "${env.PATH};${ANDROID_HOME}/platform-tools;${ANDROID_HOME}/emulator"
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/GaneshlondheMatter/MatterVerse-Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Android Emulator') {
            steps {
                bat """
                echo Starting Android Emulator Pixel_9_Pro_XL...
                emulator -list-avds
                emulator -avd Pixel_9_Pro_XL -no-window -no-audio -no-snapshot-load &
                timeout /t 60
                adb wait-for-device
                adb devices
                """
            }
        }

        stage('Run WDIO Tests') {
            steps {
                bat 'npx wdio run wdio.conf.js'
            }
        }
    }

    post {
        always {
            // Generate Allure Report
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            // Kill emulator safely
            bat 'adb emu kill || exit 0'
        }

        success {
            echo '✅ Tests passed & Allure report generated'
        }

        failure {
            echo '❌ Tests failed – check Allure report'
        }
    }
}

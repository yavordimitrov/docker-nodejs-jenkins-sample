node {
    checkout scm
    echo  "Build: ${BUILD_NUMBER}"

    def IMAGE_NAME = 'yavord/nodeapp'
    //Just to see what is available
    sh 'printenv'    

    stage('Hello') {
        //Check if everything works
        echo 'Hello world'
    }

    stage('Build container image') {
        sh "sudo docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
    }

    stage('Run docker container from image') {

        //Stop and remove all previous containers
        sh "sudo docker rm \$(docker stop \$(docker ps -a -q --filter ancestor=${IMAGE_NAME}))"

                def CONTAINER_ID = sh (
                script: "sudo docker run -d -p 8082:3000 ${IMAGE_NAME}:${BUILD}",
                returnStdout: true
        ).trim()

        echo "============================="
        echo "============================="
        echo "Container id: ${CONTAINER_ID}"
        echo "============================="
        echo "============================="
    }
}

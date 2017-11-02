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
        sh "ls"
        sh "sudo docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
    }

    stage('Run docker container from image') {

        echo "============================="
        echo "============================="
        echo "===Removing old containers==="
        echo "============================="
        echo "============================="
        //Stop and remove all previous containers
        //sh "sudo docker rm \$(sudo docker stop \$(sudo docker ps -a -q --filter ancestor=${IMAGE_NAME}))"
        


        echo "============================="
        echo "============================="
        echo "===Running ${IMAGE_NAME} ==="
        echo "============================="
        echo "============================="

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

node {
    checkout scm
    echo  "Build: ${BUILD}"
    sh 'printenv'

    echo "Branch name: ${BRANCH_NAME}"
    BUILD = BRANCH_NAME == 'master' ? 'latest' : BRANCH_NAME

    stage('Hello') {
        //Just check if everything works

        echo "Hello world"
    }

    stage('Build container image')
    {
        
    }
}

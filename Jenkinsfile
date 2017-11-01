node {
    checkout scm
    
    echo "Branch name: ${BRANCH_NAME}"
    BUILD = BRANCH_NAME == 'master' ? 'latest' : BRANCH_NAME
    
    echo  "Build: ${BUILD}"

    stage('Hello') {
        //Just check if everything works
        echo "Hello world"
    }

    stage('Build container image')
    {
        
    }
}



const dev = {
    env: 'DEV',
    url: {
        ByPassServlet: 'http://localhost:8080/ByPassServlet/',
        CRMServlet: 'http://localhost:8080/CRMServlet/'
    }
}

const prod = {
    env: 'DEV',
    url: {
        ByPassServlet: 'http://localhost:8080/ByPassServlet/',
        CRMServlet: 'http://localhost:8080/CRMServlet/'
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config
}


const dev = {
    env: 'DEV',
    url: {
        ByPassServlet: 'http://localhost:8080/ByPassServlet/'
    }
}

const prod = {
    env: 'DEV',
    url: {
        ByPassServlet: 'http://localhost:8080/ByPassServlet/'
    }
}

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config
}
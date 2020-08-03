const Auth = {

    authenticate() {
        localStorage.setItem('token', 'vaccify');
    },

    signout() {
        localStorage.removeItem('token');
    },

    getAuth() {
        return localStorage.getItem('token');
    },

    //
    setverifierdemo(props) {
        localStorage.setItem('demo', props.name);
    },
    getVerifierDemo() {
        return localStorage.getItem('demo');
    }
};

export default Auth;
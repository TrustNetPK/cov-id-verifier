export function GET_API_SECRET() {
    let API_SECRET = process.env.REACT_APP_API_SECRET;
    if (API_SECRET == undefined || API_SECRET == '')
        return 'secret'
    else
        return API_SECRET
}

export function GET_PASSCODE() {
    let PASSCODE = process.env.REACT_APP_PASSCODE;
    return PASSCODE
}


export function GET_VERIFIER_HOST_URL() {
    let VERIFIER_HOST_URL = process.env.REACT_APP_VERIFIER_HOST_URL;
    if (VERIFIER_HOST_URL == undefined || VERIFIER_HOST_URL == '')
        return 'NONE'
    else
        return VERIFIER_HOST_URL
}

export var PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
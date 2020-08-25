import axios from 'axios';
import { GET_API_SECRET, GET_VERIFIER_HOST_URL, PROXY_URL } from './constants'

export default {

    CreateConnectionInvitation: () => {
        var headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-API-Key": `${GET_API_SECRET()}`
        };
        return axios.post(PROXY_URL + GET_VERIFIER_HOST_URL() + '/connections/create-invitation', {}, { headers });
    }
}
import axios from 'axios';
import { API_SECRET } from './constants'

export default {

    CreateConnectionInvitation: () => {
        var headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-API-Key": `${API_SECRET}`
        };
        return axios.post('/connections/create-invitation', {}, { headers });
    }
}
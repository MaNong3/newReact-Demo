import axios from "axios"
import {ApiCom} from "./comApi"

class Api extends ApiCom {
    /**
     * 登陆
     * @param params
     */
    Login = (params) => {
        return axios.post('/login/cellphone', params);
    }
}
export default new Api()

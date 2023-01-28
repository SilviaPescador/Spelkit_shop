import axios from "axios";

const ENDPOINT_PATH:string = "https://reqres.in/api/";

export default class RegisterService {
      async register(email:string, password:string) {
            const user = { email, password };
            return await axios.post(ENDPOINT_PATH + "register", user);
}
}

// revisar, para esto me falta crear un componente de registro)
// https://codingpotions.com/vue-login
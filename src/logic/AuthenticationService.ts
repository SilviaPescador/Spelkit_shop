import axios from "axios";

const ENDPOINT_PATH = "https://reqres.in/api/";

export default class AuthenticationService {
	async login(email: string, password: string) {
		const user = { email, password };
		return await axios.post(ENDPOINT_PATH + "login", user);
	}
}

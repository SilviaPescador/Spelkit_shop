import { RouteLocation } from "vue-router";
import Swal from 'sweetalert2'

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
	// console.log(to, from, next);
	const token = localStorage.getItem("token");

	if (token) {
		next();
	} else {
		Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'We don\'t recognize you, please login!',
    })
		next({ name: "login" });
	}
};

export default haveRoleGuard;

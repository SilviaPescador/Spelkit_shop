import axios , { AxiosHeaders } from 'axios'

const spelkitShopApi = axios.create( {
	baseURL: 'https://dummyjson.com'
})

spelkitShopApi.interceptors.request.use((config) => {
	const token = localStorage.getItem('token') ?? '';
    if(token) {
	(config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); // JWT
    }
    return config;
  });
  
  export default spelkitShopApi;

//Este código es parte de un módulo de una aplicación web o móvil que utiliza la librería Axios 
//para hacer peticiones HTTP. Este código establece un interceptor de solicitudes en Axios que se 
//ejecuta antes de que cualquier solicitud sea enviada. 
//El interceptor agrega un encabezado "Authorization" con un token de portador JWT (JSON Web Token) 
//al encabezado de configuración de la solicitud. 
//El token se recupera del almacenamiento local del navegador utilizando el método 
//localStorage.getItem('token') y se agrega al encabezado si existe. 
//La idea es que el token se utilice para autenticar al usuario y autorizar su acceso a los 
//recursos protegidos del servidor.
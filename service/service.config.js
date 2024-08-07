import axios from "axios"; // Crear una instancia de axios con la URL base del servidor

const service = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
}); // Configurar un interceptor para agregar el token a todas las solicitudes

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    config.headers.authorization = `Bearer ${storedToken}`;
  }
  return config;
});
export default service;

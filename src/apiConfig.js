// apiConfig.js
import { config } from 'dotenv';


// Carga las variables de entorno desde el archivo .env
config();

// Obtiene la clave de API del archivo .env
const apiKey = process.env.OPENAI_API_KEY;

export default apiKey;

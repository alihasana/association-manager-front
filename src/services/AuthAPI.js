import axios from "axios";


/**s
 * Requête HTTP d'authentification et stockage du token dans le storage et sur Axios
 * @param username string
 * @param password string
 */
function authenticate(username, password) {
    return axios
        .post("https://127.0.0.1:8000/api/login_check", {username, password})
        .then(response => response.data.token)
        .then(token => {

            // Je stocké le token dans mon localStorage
            window.localStorage.setItem("authToken", token);
            // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
            setAxiosToken(token);
        });
}

/**
 * Positionne le token JWT sur Axios
 * @param {string} token Le token JWT
 */
function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

export default {
    authenticate,
};

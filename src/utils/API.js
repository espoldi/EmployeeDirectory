import axios from "axios";

const API = {
    getRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/?results=24");
    }
};

export default API;
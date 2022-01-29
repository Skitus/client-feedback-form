import axios from "axios";

class Http {
    async getAllMessages() {
        return (await axios.get('https://feedback-nest-api.herokuapp.com/feedback-form')).data;
    }

    async createMessage(values) {
        return (await axios.post('https://feedback-nest-api.herokuapp.com/feedback-form', values)).data;
    }
}

const http = new Http();
export default http;
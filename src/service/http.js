import axios from "axios";

class Http {
  async getAllMessages() {
    return (
      await axios.get(`${process.env.REACT_APP_SERVER_API_PROD}feedback-form`)
    ).data;
  }

  async createMessage(values) {
    return (
      await axios.post(
        `${process.env.REACT_APP_SERVER_API_PROD}feedback-form`,
        values
      )
    ).data;
  }
}

const http = new Http();
export default http;

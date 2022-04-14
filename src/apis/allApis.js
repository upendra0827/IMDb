import axios from "axios";

export default axios.create({
    baseUrl: `https://react-redux-imdb.herokuapp.com`,
})
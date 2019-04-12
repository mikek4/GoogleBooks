import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBoeAORrZ6eh2-ayyufG7OVOu24CKb_Ww8";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};
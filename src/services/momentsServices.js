
import axios from "axios";
const baseUrl = "https://6286ac987864d2883e7842af.mockapi.io";

export const momentsServices = {
    getAllMoments () {

        const moments = axios.get(baseUrl + "/moments").then((res)=>res.data);
        return moments;
    }
}
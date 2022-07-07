
import axios from "axios";
const baseUrl = "http://localhost:8080";

export const momentsServices = {
    getAllMoments () {


        const moments = axios.get(baseUrl + "/climbers").then((res)=>res.data);
        return moments;
    },

    deleteMoment (id) {


        const deletedMoment = axios.delete(baseUrl + "/climbers/" + id).then((res)=>res.data);
        return deletedMoment;
    },

    createMoment (data) {

        const createdMoment = axios.post(baseUrl + "/climbers/" , data).then((res)=>res.data);
        return createdMoment;
    },

    getMomentById (id) {
        const momentById = axios.get(baseUrl +"/climbers/" + id).then((res) => res.data);
        return momentById;
    }
}


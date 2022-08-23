
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
        const moment = axios.get(baseUrl +"/climbers/" + id).then((res) => res.data);
        return moment;
    },

    updateMoment (id, newMoment) {
        const updatedMoment = axios.put(baseUrl + id, "/climbers/" + newMoment.id).then((res) => res.data);
        return updatedMoment;
    },

    getBySearch(search) {
        const searched = axios.get(`${baseUrl}/climbers?search=${search}`).then((res) => res.data);
        return searched;
    }}
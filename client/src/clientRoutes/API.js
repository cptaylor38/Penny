import axios from "axios";

export default {
    adjustSalary: data => {
        return axios.post('/api/salary/update', data);
    },

    getCategoryData: data => {
        let id = data.id;
        return axios.get(`/api/expense/${id}/${data.category}`);
    }
};
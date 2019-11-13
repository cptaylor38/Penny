import axios from "axios";

export default {
    adjustSalary: data => {
        console.log('api reached' + data.id, data.salary)

        return axios.post('/api/salary/update', data);
    },

    getCategoryData: data => {
        return axios.get(`/api/${data.category}`, data);
    }
};
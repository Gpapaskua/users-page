import axios from "axios";

const baseURL = 'https://sweeft-hrms.dznela.com';

const axiosInstance = axios.create({
    baseURL
});

export const usersAPI = {
         async getUsers(query=''){
            return axiosInstance.get(`/gio_users${query}`)
                   .then(res => {
                        if(res.status === 200){
                            return res.data
                        }
                    })
                    .catch(error => console.log(error))
        },       

        async getPositions(){
            return axiosInstance.get(`/gio_positions`)
                   .then(res => {
                        if(res.status === 200){
                            return res.data
                        }
                    })
                    .catch(error => console.log(error))
        },

        async getSeniorities(){
            return axiosInstance.get(`/gio_seniorities`)
                   .then(res => {
                        if(res.status === 200){
                            return res.data
                        }
                    })
                    .catch(error => console.log(error))
        },   

        async getContractTypes(){
            return axiosInstance.get(`/gio_contract_types`)
                   .then(res => {
                        if(res.status === 200){
                            return res.data
                        }
                    })
                    .catch(error => console.log(error))
        },

        async getJobTypes(){
            return axiosInstance.get(`/gio_job_types`)
                   .then(res => {
                        if(res.status === 200){
                            return res.data
                        }
                    })
                    .catch(error => console.log(error))
        }       

} 
import axios from "axios"

const url = 'http://89.108.70.10:8000/'

export const getUsers = async() => axios.get(`${url}api/user`)
    .then(response => response.data)
    .then(employees => employees.data);

export const getUser = async(id) =>  axios.get(`${url}api/user/${id}`)
    .then(response => response.data);
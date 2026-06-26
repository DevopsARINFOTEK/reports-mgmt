import api from "./api";

export const getStudents = async () => {

    const response = await api.get("/interns");

    return response.data;

};
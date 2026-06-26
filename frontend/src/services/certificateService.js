import api from "./api";

export const getCertificates = async () => {

    const response = await api.get("/certificates");

    return response.data;

};
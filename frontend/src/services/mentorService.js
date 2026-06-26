import api from "./api";

export const getMentors = async () => {

    const response = await api.get("/mentors");

    return response.data;

};
import api from "./api";

export const getPlacements = async () => {

    const response = await api.get("/placements");

    return response.data;

};
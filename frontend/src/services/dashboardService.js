import api from "./api";

export const getDashboardStats = async () => {

    const response = await api.get("/dashboard-stats");

    return response.data;

};

export const getAnalytics = async () => {

    const response = await api.get("/analytics");

    return response.data;

};

export const getActivities = async () => {

    const response = await api.get("/activities");

    return response.data;

};
import api from "./api";

export const getDomains = async () => {

    const response = await api.get("/domains");

    return response.data;

};

export const getProjects = async () => {

    const response = await api.get("/projects");

    return response.data;

};

export const getMentors = async () => {

    const response = await api.get("/mentors");

    return response.data;

};

export const getAssignments = async () => {

    const response = await api.get("/project-assignments");

    return response.data;

};

export const getAttendance = async () => {

    const response = await api.get("/attendance-summary");

    return response.data;

};
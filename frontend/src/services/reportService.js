import api from "./api";

export const getStudentsReport = async () => {

    const response = await api.get("/reports/students");

    return response.data;

};

export const downloadStudentExcel = () => {

    window.open(
        "http://localhost:5000/reports/students/excel",
        "_blank"
    );

};
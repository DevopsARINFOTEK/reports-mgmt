const express = require("express");

const router = express.Router();

const {
    getStudentsReport,
    exportStudentsExcel
} = require("../controllers/reportController");

router.get("/students", getStudentsReport);

router.get("/students/excel", exportStudentsExcel);

module.exports = router;
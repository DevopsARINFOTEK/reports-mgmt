const pool = require("../db");
const ExcelJS = require("exceljs");

const exportStudentsExcel = async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                intern_id,
                intern_name,
                email,
                mobile,
                college,
                department,
                status,
                join_date,
                end_date
            FROM intern
            ORDER BY intern_name
        `);

        const workbook = new ExcelJS.Workbook();

        const worksheet = workbook.addWorksheet("Students");

        worksheet.mergeCells("A1:I1");
        worksheet.getCell("A1").value = "AR INFOTEK";
        worksheet.getCell("A1").font = {
            size: 20,
            bold: true
        };
        worksheet.getCell("A1").alignment = {
            horizontal: "center"
        };

        worksheet.mergeCells("A2:I2");
        worksheet.getCell("A2").value = "Student Report";
        worksheet.getCell("A2").font = {
            size: 15,
            bold: true
        };
        worksheet.getCell("A2").alignment = {
            horizontal: "center"
        };

        worksheet.addRow([]);

        worksheet.columns = [
            { header: "Intern ID", key: "intern_id", width: 12 },
            { header: "Name", key: "intern_name", width: 25 },
            { header: "Email", key: "email", width: 30 },
            { header: "Mobile", key: "mobile", width: 18 },
            { header: "College", key: "college", width: 25 },
            { header: "Department", key: "department", width: 20 },
            { header: "Status", key: "status", width: 15 },
            { header: "Join Date", key: "join_date", width: 18 },
            { header: "End Date", key: "end_date", width: 18 }
        ];

        result.rows.forEach(student => {
            worksheet.addRow(student);
        });

        const headerRow = worksheet.getRow(4);

        headerRow.eachCell(cell => {

            cell.font = {
                bold: true,
                color: {
                    argb: "FFFFFFFF"
                }
            };

            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: {
                    argb: "1E5AA8"
                }
            };

            cell.alignment = {
                horizontal: "center"
            };

        });

        worksheet.eachRow(row => {

            row.eachCell(cell => {

                cell.border = {
                    top: { style: "thin" },
                    left: { style: "thin" },
                    right: { style: "thin" },
                    bottom: { style: "thin" }
                };

            });

        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=Student_Report.xlsx"
        );

        await workbook.xlsx.write(res);

        res.end();

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

const getStudentsReport = async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                intern_id,
                intern_name,
                email,
                mobile,
                college,
                department,
                status,
                join_date,
                end_date
            FROM intern
            ORDER BY intern_name
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getStudentsReport,
    exportStudentsExcel
};


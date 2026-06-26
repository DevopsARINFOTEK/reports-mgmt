const express = require("express");
const cors = require("cors");
const pool = require("./db");

const reportRoutes = require("./routes/reports");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/reports", reportRoutes);


pool.query("SELECT NOW()")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.error("Database Connection Error:");
        console.error(error);
    });

/* ==========================
   Home Route
========================== */

app.get("/", (req, res) => {
    res.send("Backend running");
});

/* ==========================
   Login
========================== */

app.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        console.log("Login Attempt:", username);

        const result = await pool.query(
            `
            SELECT *
            FROM login
            WHERE username = $1
            AND password = $2
            `,
            [username, password]
        );

        if (result.rows.length > 0) {

            res.json({
                success: true,
                message: "Login Success"
            });

        } else {

            res.status(401).json({
                success: false,
                message: "Invalid Login"
            });

        }

    } catch (error) {

        console.error("Login Error:");
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});

/* ==========================
   Dashboard Statistics
========================== */

app.get("/dashboard-stats", async (req, res) => {

    try {

        const interns = await pool.query(
            "SELECT COUNT(*) FROM intern"
        );

        const certificates = await pool.query(
            "SELECT COUNT(*) FROM certificate"
        );

        const placements = await pool.query(
            "SELECT COUNT(*) FROM placement"
        );

        const reports = await pool.query(
            "SELECT COUNT(*) FROM report"
        );

        res.json({
            interns: Number(interns.rows[0].count),
            certificates: Number(certificates.rows[0].count),
            placements: Number(placements.rows[0].count),
            reports: Number(reports.rows[0].count)
        });

    } catch (error) {

        console.error("Dashboard Stats Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

/* ==========================
   Interns
========================== */

app.get("/interns", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                intern_id,
                intern_name,
                email,
                mobile,
                college,
                department,
                join_date,
                end_date,
                status
            FROM intern
            ORDER BY intern_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Intern Query Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

/* ==========================
   Reports
========================== */

app.get("/reports", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM report
            ORDER BY report_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Report Query Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

/* ==========================
   Certificates
========================== */

app.get("/certificates", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM certificate
            ORDER BY certificate_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Certificate Query Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

/* ==========================
   Placements
========================== */



app.get("/domains", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM internship_domain
            ORDER BY domain_name
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Domains Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/projects", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM project
            ORDER BY project_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Projects Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/mentors", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM mentor
            ORDER BY mentor_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Mentors Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/project-assignments", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                pa.assignment_id,
                i.intern_name,
                p.project_name,
                pa.assigned_date
            FROM project_assignment pa
            JOIN intern i
                ON pa.intern_id = i.intern_id
            JOIN project p
                ON pa.project_id = p.project_id
            ORDER BY pa.assignment_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error("Project Assignment Error:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/attendance-summary", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                status,
                COUNT(*) as count
            FROM attendance
            GROUP BY status
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/intern-status-summary", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                status,
                COUNT(*) count
            FROM intern
            GROUP BY status
        `);

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


app.get("/placements", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT *
            FROM placement
            ORDER BY placement_id DESC
        `);

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

/* ==========================
   Start Server
========================== */

const PORT = process.env.PORT || 5000;

app.get("/activities", async (req, res) => {

    try {

        const reports = await pool.query(`
            SELECT
                report_name AS title,
                generated_date AS activity_date,
                'Report Generated' AS activity_type
            FROM report
        `);

        const certificates = await pool.query(`
            SELECT
                certificate_no AS title,
                issue_date AS activity_date,
                'Certificate Issued' AS activity_type
            FROM certificate
        `);

        const placements = await pool.query(`
            SELECT
                company_name AS title,
                placement_date AS activity_date,
                'Placement Added' AS activity_type
            FROM placement
        `);

        const activities = [
            ...reports.rows,
            ...certificates.rows,
            ...placements.rows
        ];

        activities.sort(
            (a, b) =>
                new Date(b.activity_date) -
                new Date(a.activity_date)
        );

        res.json(
            activities.slice(0, 10)
        );

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/analytics", async (req, res) => {

    try {

        const interns = await pool.query(
            "SELECT COUNT(*) FROM intern"
        );

        const certificates = await pool.query(
            "SELECT COUNT(*) FROM certificate"
        );

        const placements = await pool.query(
            "SELECT COUNT(*) FROM placement"
        );

        const reports = await pool.query(
            "SELECT COUNT(*) FROM report"
        );

        const barData = [
            {
                month: "Interns",
                count: Number(interns.rows[0].count)
            },
            {
                month: "Certificates",
                count: Number(certificates.rows[0].count)
            },
            {
                month: "Placements",
                count: Number(placements.rows[0].count)
            },
            {
                month: "Reports",
                count: Number(reports.rows[0].count)
            }
        ];

        const pieData = [
            {
                name: "Interns",
                value: Number(interns.rows[0].count)
            },
            {
                name: "Certificates",
                value: Number(certificates.rows[0].count)
            },
            {
                name: "Placements",
                value: Number(placements.rows[0].count)
            },
            {
                name: "Reports",
                value: Number(reports.rows[0].count)
            }
        ];

        res.json({
            barData,
            pieData
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
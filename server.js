const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// EJS configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        submitted: false,
        user: null,
        error: null
    });
});

// Form submission
app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    // Basic server-side validation
    if (!name || !email || !message) {
        return res.status(400).render("index", {
            submitted: false,
            user: null,
            error: "Please complete all required fields."
        });
    }

    const user = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
    };

    res.render("index", {
        submitted: true,
        user,
        error: null
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
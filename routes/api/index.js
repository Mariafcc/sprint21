const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleRoutes");
const path = require("path");

// Book routes
router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

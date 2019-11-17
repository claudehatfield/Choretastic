const router = require("express").Router();
const bookRoutes = require("./users");

// Book routes
router.use("/calendaradult", userRoutes);

module.exports = router;

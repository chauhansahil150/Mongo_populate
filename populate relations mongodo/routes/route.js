// express, staff and right controller and post for staff and right
const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
const rightController = require("../controllers/rightsController");
router.post("/staff/create", staffController.createStaff);
router.post("/rights/create", rightController.createRight);

router.post("/rights/populate", rightController.createStaffByRight);
module.exports = router;

const express = require("express");
const postsController = require("./controllers/postController");
const adminController = require("./controllers/adminController");

const router = express.Router();

router.get("/", postsController.index);
router.get("/posts/:id", postsController.show);

router.get("/admin", adminController.index);
router.get("/admin/create", adminController.create);

module.exports = router;

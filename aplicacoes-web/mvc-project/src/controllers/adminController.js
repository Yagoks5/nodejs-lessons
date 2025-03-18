const postModel = require("../models/postModel");

const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts();

    res.render("admin", { posts });
  },
  create: (req, res) => {
    res.render("newPostForm");
  },
};

module.exports = adminController;

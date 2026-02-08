const BlogPost = require("../models/BlogPost");
const cloudinary = require("../utils/cloudinary");

const getPosts = async (req, res) => {
  const posts = await BlogPost.find().populate("author", "username");
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await BlogPost.findById(req.params.id).populate("author", "username");
  res.json(post);
};

const createPost = async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const post = await BlogPost.create({
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
      imageUrl,
      author: req.user,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

const deletePost = async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
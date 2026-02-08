import { useState } from "react";
import axios from "axios";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    await axios.post("http://localhost:5000/blogs/create", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-rose-50 to-rose-100">
      <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-white/20">
        <h2 className="text-4xl font-playfair text-rose-700 mb-8 text-center">Create Blog Post</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-4 p-3 rounded-lg border bg-white/40 placeholder-rose-400" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full mb-6 p-3 rounded-lg border bg-white/40 placeholder-rose-400 h-40"></textarea>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full mb-6 p-3 rounded-lg border bg-white/40" />
        <button className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 hover:shadow-lg transition transform hover:scale-105">Publish</button>
      </form>
    </div>
  );
}

export default CreateBlog;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <p className="text-center text-rose-600 mt-20">Loading...</p>;

    return (
      <div className="pt-24 px-6 bg-gradient-to-r from-rose-50 to-rose-100 min-h-screen">
        <article className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl max-w-2xl mx-auto p-8">
          
        </article>
      </div>
    );
  }
  
  export default ViewBlog;
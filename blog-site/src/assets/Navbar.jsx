import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full top-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-playfair text-rose-700">🌸 Bloom Blog</h1>
        <div className="space-x-6 font-inter text-rose-600">
          <Link to="/" className="hover:text-rose-700 transition">Home</Link>
          <Link to="/create" className="hover:text-rose-700 transition">Create</Link>
          <Link to="/signup" className="hover:text-rose-700 transition">Signup</Link>
          <Link to="/login" className="hover:text-rose-700 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
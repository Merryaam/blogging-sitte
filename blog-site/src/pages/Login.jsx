function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-rose-50 to-rose-100">
      <form className="bg-white/30 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
        <h2 className="text-4xl font-playfair text-rose-700 mb-8 text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-3 rounded-lg border bg-white/40 placeholder-rose-400" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-3 rounded-lg border bg-white/40 placeholder-rose-400" />
        <button className="w-full bg-rose-500 text-white py-3 rounded-full hover:bg-rose-600 transition">Login</button>
      </form>
    </div>
  );
}

export default Login;
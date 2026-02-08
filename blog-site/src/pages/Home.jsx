import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="home-content">
        <h1 className="home-title">Welcome to Swifts Blog</h1>
        <h2 className="home-subtitle"></h2>
        <p className="home-tagline">A space for stories, beauty, and inspiration</p>

        <div className="home-buttons">
          <a href="/create" className="btn-primary">✍️ Start Writing</a>
          <a href="/signup" className="btn-secondary">🌸 Join the Community</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

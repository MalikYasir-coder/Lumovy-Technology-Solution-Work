import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="back-home-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
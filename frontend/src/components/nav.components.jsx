import { Link } from "react-router-dom";

export default function NavBar({ api_name, api_uri, children }) {
  return (
    <div>
      <h4>MENU API</h4>
      <div>
        <Link
          to={api_uri}
        >
          IR A {api_name.toUpperCase()}
        </Link>
        {children}
      </div>
    </div>
  );
}

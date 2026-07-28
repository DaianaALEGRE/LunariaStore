import "../styles/navbar.css";
import Banner from "./banner";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
<Link to="/" className="logo">
    <img src="/logo.svg" alt="Lunaria Store" />
  </Link>
      <Banner />
    </nav>
  );
}

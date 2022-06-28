import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div style={{ color: "blue", textAlign: "left" }}>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users page</Link>
          </li>
          <li>
            <Link to="/photos">Photos page</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms page</Link>
          </li>
          <li>
            <Link to="/cities">Cities page</Link>
          </li>
          <li>
            <Link to="/Countries">Countries page</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

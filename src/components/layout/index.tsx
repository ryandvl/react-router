import { Outlet } from "react-router";
import "./styles.css";

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Hello, Ryan</p>
      </header>

      <Outlet />

      <footer>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import CommandPalette from "./CommandPalette";
import CursorGlow from "./CursorGlow";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useScrollReveal();


  return (
    <div className="portfolio-app">
      <CursorGlow />
      <Navbar />
      <CommandPalette />
      <main>
        <div className="route-fade" key={location.pathname}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
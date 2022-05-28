import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <nav
        className="bg-[#373048] h-[5rem] flex items-center w-screen"
        data-testid="navbar"
        id="navbar"
      >
        <div className="container mx-auto">
          <Link to="/" className="text-white">
            <h1>TMDB</h1>
          </Link>
        </div>
      </nav>
      <main className="pb-8">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;

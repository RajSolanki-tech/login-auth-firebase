import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };
  return (
    <div className="bg-white-400 border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-10">
        <div>
          <img
            src="./logo.png"
            alt="logo"
            className="h-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-1 text-xl font-semibold text-gray-500 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-1 text-xl font-semibold text-gray-500 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

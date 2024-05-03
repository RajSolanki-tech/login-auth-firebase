import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
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
              className={`cursor-pointer py-1 text-xl font-semibold text-gray-500 border-b-[3px] ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-1 text-xl font-semibold text-gray-500 border-b-[3px] ${
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

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">SocialMash</div>
      <div className="space-x-4">
        <Link to="/create" className="text-gray-700 hover:text-blue-600">
          Create Poll
        </Link>
        <Link to="/result" className="text-gray-700 hover:text-blue-600">
          Result
        </Link>
        <Link to="/trending" className="text-gray-700 hover:text-blue-600">
          Trending Polls
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

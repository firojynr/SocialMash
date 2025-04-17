import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Create Instant Polls, Share & Get Votes!
      </h1>
      <p className="text-lg mb-6">Simple. Fast. Shareable.</p>
      <div className="space-x-4">
        <Link
          to="/create"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Create Poll
        </Link>
        <Link
          to="/result"
          className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          View Result
        </Link>
      </div>
    </div>
  );
};

export default Home;

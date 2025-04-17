const Modal = ({ pollId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Poll Created!
        </h2>
        <p className="mb-4">Your Poll ID is:</p>
        <div className="font-mono text-lg bg-gray-100 px-4 py-2 rounded mb-4">
          {pollId}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={`/poll/${pollId}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Result
          </a>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

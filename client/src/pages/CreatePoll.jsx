import { useState } from "react";
import Modal from "../components/Modal";

const CreatePoll = () => {
  const [title, setTitle] = useState("");
  const [pollType, setPollType] = useState("option");
  const [options, setOptions] = useState(["", ""]);
  const [duration, setDuration] = useState(24);
  const [pollId, setPollId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addOption = () => {
    if (options.length < 10) {
      setOptions([...options, ""]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPollId = Math.random().toString(36).substring(2, 8);

    console.log({
      title,
      pollType,
      options,
      duration,
      pollId: newPollId,
    });

    setPollId(newPollId);
    setShowModal(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Poll</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Poll Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Poll Type</label>
          <select
            value={pollType}
            onChange={(e) => {
              setPollType(e.target.value);
              setOptions(["", ""]);
            }}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="option">Option Poll</option>
            <option value="image">Image Poll</option>
            <option value="rank">Rank Poll</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Options</label>
          {options.map((opt, index) => (
            <div key={index} className="mb-2">
              {pollType === "image" ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleOptionChange(index, e.target.files[0])}
                  className="w-full"
                  required
                />
              ) : (
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              )}
            </div>
          ))}
          {options.length < 10 && (
            <button
              type="button"
              onClick={addOption}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              + Add More
            </button>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            Poll Duration (in hours)
          </label>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create Poll
        </button>
      </form>

      {showModal && (
        <Modal pollId={pollId} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CreatePoll;

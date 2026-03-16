import React, { useState } from "react";

const FeedBack = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedFeedback({
      name: name,
      message: message
    });

    setName("");
    setMessage("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <br />
          <textarea
            value={message}
            onChange={handleMessageChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>

      </form>

      {submittedFeedback && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff"
          }}
        >
          <h3>Submitted Feedback</h3>
          <p><strong>Name:</strong> {submittedFeedback.name}</p>
          <p><strong>Message:</strong> {submittedFeedback.message}</p>
        </div>
      )}

    </div>
  );
};

export default FeedBack;
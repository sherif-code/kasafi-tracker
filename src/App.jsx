import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      title,
      amount,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>kasafi Expense Tracker</h1>

      {/* FORM */}
      <div style={{ marginTop: "20px" }}>
        <h3>Add Expense</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What did you spend on?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount (GHS)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button type="submit">Add</button>
        </form>
      </div>

      {/* EMPTY LIST SECTION */}
      <div style={{ marginTop: "40px" }}>
        <h3>Expenses</h3>
        <p>No expenses yet</p>
      </div>
    </div>
  );
}

export default App;

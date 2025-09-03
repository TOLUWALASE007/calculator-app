import { useState } from "react";

type Op = "add" | "subtract" | "multiply" | "divide";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState<Op>("add");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const api = "https://calculator-app-production-d50e.up.railway.app";

  async function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${api}/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a, b, op }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
      } else {
        setResult(String(data.result));
      }
    } catch {
      setError("Could not reach backend. Is it running?");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Calculator App
        </h1>

        <form onSubmit={handleCalculate} className="space-y-4">
          <input
            type="number"
            placeholder="First number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="number"
            placeholder="Second number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="w-full border rounded-xl p-3"
            required
          />

          <div className="grid grid-cols-4 gap-2">
            {(["add", "subtract", "multiply", "divide"] as Op[]).map((o) => (
              <button
                type="button"
                key={o}
                onClick={() => setOp(o)}
                className={`rounded-xl border p-2 ${
                  op === o
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {o}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-xl p-3 hover:bg-indigo-700"
          >
            Calculate
          </button>
        </form>

        {error && <p className="mt-4 text-red-600">{error}</p>}
        {result && !error && (
          <p className="mt-4 text-green-700">Result: {result}</p>
        )}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import ExplanationCard from "./ExplanationCard";

export default function TopicInput() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic to continue.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    const data = await res.json();
    setExplanation(data.explanation);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-6">AI Study Topic Explainer</h1>

      <input
        type="text"
        placeholder="Enter a topic (e.g. Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-3 rounded w-80 mb-4"
      />

      <button
        onClick={handleExplain}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Explain Topic
      </button>

      {loading && (
        <p className="mt-4 text-gray-600">Generating explanation...</p>
      )}

      <ExplanationCard explanation={explanation} />
    </div>
  );
}

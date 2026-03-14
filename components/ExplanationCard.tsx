export default function ExplanationCard({
  explanation,
}: {
  explanation: string;
}) {
  if (!explanation) return null;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg mt-6 shadow-lg max-w-xl">
      <h2 className="text-lg font-semibold mb-2">Explanation</h2>
      <p className="leading-relaxed">{explanation}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">InsightForge</h1>
      <p className="text-gray-600 text-lg max-w-xl mx-auto">
        Upload your data and get AI-powered insights instantly.
      </p>
      <div className="mt-8">
        <a
          href="/uploads"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}


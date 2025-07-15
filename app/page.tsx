'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-2xl font-bold text-emerald-500">CDT</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">
            <span className="text-white">Se verden gennem</span><br/>
            <span className="text-emerald-400">børnenes øjne</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Danmarks første <strong>levende interaktive fagbog</strong> med AI-rollespil, 
            quizmotor og Coach Heidi. Lær at tale til børn med diagnoser.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg">
            🚀 Prøv Gratis Demo
          </button>
        </div>
      </section>
    </div>
  );
}
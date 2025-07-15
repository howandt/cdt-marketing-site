'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-2xl font-bold text-emerald-500">CDT Levende Fagbog</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-emerald-600/20 border border-emerald-500 rounded-full px-6 py-2 mb-8">
            <span className="text-emerald-400 font-semibold">🚀 Verdens Første Levende Interaktive Fagbog 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-white">Se verden gennem</span><br/>
            <span className="text-emerald-400">børnenes øjne</span><br/>
            <span className="text-gray-300 text-3xl md:text-4xl">med AI-drevet fagbog</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            <strong>Lær at tale til børn med diagnoser</strong> gennem vores revolutionære fagbog med 
            <span className="text-emerald-400"> AI-rollespilmotor, quizmotor og Coach Heidi</span>. 
            Giv børnene den strukturerede og stabile hverdag de fortjener.
          </p>
          
          <div className="space-y-4">
            <a href="https://cdt-website.vercel.app/platform" 
   className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transform transition-all shadow-2xl border-2 border-emerald-400">
  👆 KLIK HER - Oplev Den Levende Fagbog Nu
</a>
            <p className="text-gray-400">Tal til fagbogen • Lyt til svar • Se børns tanker</p>
          </div>
        </div>
      </section>

      {/* AI Motorer Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-400 mb-6">
              🤖 AI-Drevne Motorer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vores fagbog er levende takket være avancerede AI-motorer. 
              Du taler til fagbogen - den lærer dig at tale til børnene.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border-2 border-emerald-500">
              <div className="text-6xl mb-4 text-center">🎭</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">AI Rollespilmotor</h3>
              <p className="text-gray-300 mb-6">
                Træn forælder-barn og lærer-barn samtaler. Oplev REVERSE perspektiv - hvad tænker barnet?
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all">
                ➤ KLIK - Test Rollespil Nu
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border-2 border-blue-500">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Intelligent Quizmotor</h3>
              <p className="text-gray-300 mb-6">
                Skriv dit take på cases fra biblioteket. Få optimeret feedback og lær bedste praksis.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all">
                ➤ KLIK - Prøv Quiz Nu
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border-2 border-purple-500">
              <div className="text-6xl mb-4 text-center">👩‍🏫</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Coach Heidi AI</h3>
              <p className="text-gray-300 mb-6">
                Din personlige AI-guide. Tal til fagbogen - den svarer tilbage med løsninger!
              </p>
              <button className="bg-purple-600 hover:purple-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all">
                ➤ KLIK - Tal Med Heidi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klar til at revolutionere din tilgang?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
  Test vores interaktive fagbog der opdateres månedligt med nyeste viden og real-life cases fra børn med diagnoser.
</p>
          <a href="https://cdt-website.vercel.app/platform" 
             className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl border-2 border-emerald-200">
            🌟 KLIK HER - Test CDT Interaktive Fagbog
          </a>
        </div>
      </section>
    </div>
  );
}
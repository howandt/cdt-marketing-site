'use client';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Børn med Diagnoser Fagbog | Autisme Inklusion Folkeskolen | CDT</title>
        <meta name="description" content="Hjælp børn med diagnoser som autisme få bedre skoledag. Levende interaktiv fagbog med AI-rollespil og quizmotor. Forstå børn med diagnoser i folkeskolen." />
        <meta name="keywords" content="børn med diagnoser, autisme diagnoser, børn med diagnoser i folkeskolen, inklusion folkeskolen, inklusion betydning, interaktiv fagbog, levende fagbog, AI rollespil" />
        <meta name="author" content="CDT Levende Øko Brochure" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://interaktiv-cdtfagbog.vercel.app" />
        
        <meta property="og:title" content="Hjælp Børn med Diagnoser | CDT Interaktiv Fagbog" />
        <meta property="og:description" content="Levende fagbog der hjælper børn med autisme og andre diagnoser få en bedre skoledag. AI-drevet læring og rollespil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interaktiv-cdtfagbog.vercel.app" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hjælp Børn med Diagnoser | CDT Fagbog" />
        <meta name="twitter:description" content="Interaktiv fagbog til støtte af børn med autisme og diagnoser i folkeskolen." />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Resten af din kode her */}
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
          
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
  Test vores interaktive fagbog med nyeste viden om <strong>autisme diagnoser</strong>. 
  Hjælp <span className="text-emerald-200">børn med diagnoser i folkeskolen</span>{' '}
  at få en bedre skoledag gennem forståelse og støtte.
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
  Støt <strong>inklusion i folkeskolen</strong> med AI-motorer der lærer dig at arbejde med 
  <span className="text-emerald-400">autisme diagnoser</span> og andre udfordringer. 
  Forstå <strong>inklusion betydning</strong> for børn med diagnoser i folkeskolen.
</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border-2 border-emerald-500">
              <div className="text-6xl mb-4 text-center">🎭</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">AI Rollespilmotor</h3>
              <p className="text-gray-300 mb-6">
                Træn forælder-barn og lærer-barn samtaler. Oplev REVERSE perspektiv - hvad tænker barnet?
              </p>
              <a href="https://cdt-website.vercel.app/demo/test?role=parent" 
   className="block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all text-center">
  ➤ KLIK - Test Rollespil Nu
</a>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border-2 border-blue-500">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Intelligent Quizmotor</h3>
              <p className="text-gray-300 mb-6">
                Skriv dit take på cases fra biblioteket. Få optimeret feedback og lær bedste praksis.
              </p>
              <a href="https://cdt-website.vercel.app/quiz" 
   className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all text-center">
  ➤ KLIK - Prøv Quiz Nu
</a>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border-2 border-purple-500">
              <div className="text-6xl mb-4 text-center">👩‍🏫</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Coach Heidi AI</h3>
              <p className="text-gray-300 mb-6">
                Din personlige AI-guide. Tal til fagbogen - den svarer tilbage med løsninger!
              </p>
              <a href="https://cdt-website.vercel.app/demo/test?role=teacher" 
   className="block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold w-full hover:scale-105 transform transition-all text-center">
  ➤ KLIK - Tal Med Heidi
</a>
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
  Test vores interaktive fagbog med nyeste viden om <strong>autisme diagnoser</strong> og 
  <span className="text-emerald-200">inklusion i folkeskolen</span>. 
  Hjælp børn med diagnoser gennem forståelse af <strong>inklusion betydning</strong>.
</p>
          <a href="https://cdt-website.vercel.app/platform" 
             className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl border-2 border-emerald-200">
            🌟 KLIK HER - Test CDT Interaktive Fagbog
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-emerald-500 mb-4">CDT Levende Øko Brochure</div>
          <p className="text-gray-400 mb-6">
  Hjælper børn med diagnoser få en bedre skoledag 🌱
</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://cdt-website.vercel.app/kontakt" 
               className="text-emerald-400 hover:text-emerald-300 transition-colors">
              📧 Kontakt Os
            </a>
            <a href="https://cdt-website.vercel.app/features" 
               className="text-emerald-400 hover:text-emerald-300 transition-colors">
              🌟 Se Features
            </a>
            <a href="https://cdt-website.vercel.app/kontakt?plan=pro" 
               className="text-emerald-400 hover:text-emerald-300 transition-colors">
              🚀 Start Prøveperiode
            </a>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            © 2025 CDT Levende Øko Brochure - Digital brochure der beskytter naturen
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
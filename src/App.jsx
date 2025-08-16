import './assets/css/style.css';
import Header from './components/Header';
import MacBook3DSection from './components/MacBook3DSection';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />

      <main className="pt-24">
        {/* 1ª sessão (hero) – imagem estática à direita */}
        <section className="min-h-[80vh] grid md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto px-6">
          <div>
            <h1 className="text-7xl font-extrabold tracking-tight">MACBOOK</h1>
            <span className="inline-flex mt-4 px-4 py-2 rounded-xl border border-white/60 text-xl font-bold">PRO</span>
            <p className="mt-6 text-lg text-white/70">Desempenho de estúdio. Portabilidade de todos os dias.</p>
            <a className="btn btn-success mt-8 rounded-xl">COMPRAR AGORA</a>
          </div>
          <div className="relative">
            <img src="/m4-hero.png" alt="MacBook" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* 2ª, 3ª sessões (placeholders) */}
        <section id="info" className="py-24 max-w-7xl mx-auto px-6">Informações (placeholder)</section>
        <section id="frete" className="py-24 max-w-7xl mx-auto px-6">Custo de Frete (placeholder)</section>
        <section id="duvidas" className="py-24 max-w-7xl mx-auto px-6">Dúvidas (placeholder)</section>

        {/* 4ª sessão – 3D original */}
        <MacBook3DSection />

        <section id="precos" className="py-24 max-w-7xl mx-auto px-6">Preços (placeholder)</section>
        <section id="contato" className="py-24 max-w-7xl mx-auto px-6">Contato (placeholder)</section>
      </main>
    </div>
  );
}

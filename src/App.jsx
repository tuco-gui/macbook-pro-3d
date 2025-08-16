import React, { useEffect } from "react";
import MacContainer from "./components/MacContainer.jsx";

// Mantém os estilos do projeto 3D
import "./assets/css/index.css";
import "./assets/css/style.css";

export default function App() {
  // ====== DEFINA seu WhatsApp ======
  const WHATSAPP_NUMBER = "5561999999999"; // <-- TROCAR

  // Monta link com UTM herdado do index.html (window.__utm)
  function buildWaLink(baseText) {
    const utm = window.__utm || "";
    const base =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(
        baseText ||
          "Olá, quero informações sobre o MacBook Pro (M2/M3/M4). Vim pela Landing Page."
      );
    return utm ? base + "%0A%0AUTM=" + encodeURIComponent(utm) : base;
  }

  // Atribui href e tracking simples a todos os botões .js-wa
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const btns = document.querySelectorAll(".js-wa");
    btns.forEach((btn) => {
      const product = btn.getAttribute("data-product") || "generic";
      btn.setAttribute("href", buildWaLink(product));
      btn.addEventListener("click", () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_click",
          product,
          position_id: btn.id || "no-id",
          utm: window.__utm || "",
        });
        if (window.fbq) window.fbq("track", "Contact", { content_name: product });
      });
    });
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-3">
            <img
              src="/img/logovenucce.png?v=4"
              alt="Venucce"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#info" className="hover:text-white">
              Informações
            </a>
            <a href="#frete" className="hover:text-white">
              Custo de Frete
            </a>
            <a href="#duvidas" className="hover:text-white">
              Dúvidas
            </a>
            <a href="#precos" className="hover:text-white">
              Preços
            </a>
          </nav>

          <a
            id="cta-top"
            href="#wa"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-[#07d83b] text-white transition hover:brightness-95 hover:-translate-y-px js-wa"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      {/* =============== HERO (Seção 1) =============== */}
      <section id="hero" className="relative pt-28 pb-14">
        <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h1 className="font-black leading-[1.03] tracking-tight">
              <span className="block text-[42px] sm:text-[56px] md:text-[68px]">
                MACBOOK
              </span>
              <span className="mt-3 inline-flex items-center px-4 py-1.5 rounded-2xl border-2 md:border-4 border-white/90 text-[30px] sm:text-[44px] md:text-[52px] font-extrabold">
                PRO
              </span>
            </h1>

            <p className="mt-6 text-white/80 max-w-xl">
              M4, M3 e M2 com superdesconto à vista e parcelamento em até 18x.
              Lacrado, original, com nota e garantia.
            </p>

            <div className="mt-8">
              <a
                id="cta-hero"
                href="#wa"
                className="bg-[#07d83b] text-white rounded-2xl px-7 py-3 text-base font-semibold inline-flex items-center justify-center transition hover:brightness-95 hover:-translate-y-px js-wa"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex flex-col items-center">
            <img
              src="/img/m4-hero.png?v=4"
              alt="MacBook Pro M4 — Venucce"
              className="block w-full h-auto object-contain select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* =============== SEÇÃO 3D (usa o MacContainer do projeto) =============== */}
      <section id="viewer-3d" className="py-20 bg-black">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Veja em 3D</h2>
            <p className="mt-2 text-white/70">
              Gire, aproxime e veja de todos os ângulos.
            </p>
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-black">
            {/* Altura responsiva estilo Apple */}
            <div className="w-full" style={{ height: "min(70vh, 780px)" }}>
              <MacContainer />
            </div>
          </div>

          <p className="mt-4 text-center text-white/60 text-sm">
            <span id="viewerLabel">MacBook Pro — Space Black</span>
          </p>
        </div>
      </section>

      {/* Modelos disponíveis */}
      <section id="modelos" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Modelos disponíveis</h2>
          <p className="text-white/70 mt-2">
            Todos novos, lacrados, originais e prontos pra entrega.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* M4 */}
            <article className="rounded-3xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <img
                src="/img/m4-14.jpg"
                alt="MacBook Pro M4 14 polegadas"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-center">
                MacBook Pro M4 14"
              </h3>
              <ul className="mt-3 text-white/80 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  18GB
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  512GB SSD
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  Retina XDR
                </li>
              </ul>
              <div className="mt-4 text-green-300 font-semibold text-center">
                R$ 4.750 à vista*
              </div>
              <div className="mt-1 text-sm text-white/70 text-center">
                Novo, lacrado, nota e garantia
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="#wa"
                  className="inline-flex rounded-xl px-5 py-2 font-semibold bg-[#07d83b] text-white transition hover:brightness-95 hover:-translate-y-px js-wa"
                  data-product="MacBook Pro M4 14"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </article>

            {/* M3 Pro */}
            <article className="rounded-3xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <img
                src="/img/m3pro-16.jpg"
                alt="MacBook Pro M3 Pro 16 polegadas"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-center">
                MacBook Pro M3 Pro 16"
              </h3>
              <ul className="mt-3 text-white/80 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  16GB
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  1TB SSD
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  Retina XDR
                </li>
              </ul>
              <div className="mt-4 text-green-300 font-semibold text-center">
                Consulte condições
              </div>
              <div className="mt-1 text-sm text-white/70 text-center">
                Entrega expressa em Brasília
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="#wa"
                  className="inline-flex rounded-xl px-5 py-2 font-semibold bg-[#07d83b] text-white transition hover:brightness-95 hover:-translate-y-px js-wa"
                  data-product="MacBook Pro M3 Pro 16"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </article>

            {/* M2 Pro */}
            <article className="rounded-3xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <img
                src="/img/m2pro-14.jpg"
                alt="MacBook Pro M2 Pro 14 polegadas"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-center">
                MacBook Pro M2 Pro 14"
              </h3>
              <ul className="mt-3 text-white/80 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  16GB
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  512GB SSD
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#07d83b]"></span>{" "}
                  Tela Retina
                </li>
              </ul>
              <div className="mt-4 text-green-300 font-semibold text-center">
                Consulte condições
              </div>
              <div className="mt-1 text-sm text-white/70 text-center">
                Avaliação do seu usado na hora
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="#wa"
                  className="inline-flex rounded-xl px-5 py-2 font-semibold bg-[#07d83b] text-white transition hover:brightness-95 hover:-translate-y-px js-wa"
                  data-product="MacBook Pro M2 Pro 14"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3 heros */}
      <section className="py-14 border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Escolha seu MacBook Pro</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <figure className="rounded-3xl overflow-hidden border border-white/10 bg-black/30">
              <img
                src="/img/m4-hero.png?v=4"
                alt="MacBook Pro M4"
                className="w-full aspect-[16/10] object-contain bg-transparent"
              />
              <figcaption className="p-4 flex items-center justify-center">
                <a
                  href="#wa"
                  className="rounded-xl bg-[#07d83b] text-white px-4 py-2 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
                  data-product="MacBook Pro M4"
                >
                  WhatsApp
                </a>
              </figcaption>
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-white/10 bg-black/30">
              <img
                src="/img/m3-hero.jpg"
                alt="MacBook Pro M3"
                className="w-full aspect-[16/10] object-cover"
              />
              <figcaption className="p-4 flex items-center justify-center">
                <a
                  href="#wa"
                  className="rounded-xl bg-[#07d83b] text-white px-4 py-2 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
                  data-product="MacBook Pro M3"
                >
                  WhatsApp
                </a>
              </figcaption>
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-white/10 bg-black/30">
              <img
                src="/img/m2-hero.jpg"
                alt="MacBook Pro M2"
                className="w-full aspect-[16/10] object-cover"
              />
              <figcaption className="p-4 flex items-center justify-center">
                <a
                  href="#wa"
                  className="rounded-xl bg-[#07d83b] text-white px-4 py-2 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
                  data-product="MacBook Pro M2"
                >
                  WhatsApp
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Por que Venucce */}
      <section id="info" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Por que Venucce?</h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#07d83b]"></span>
                <span className="text-white/85">
                  Apple original, lacrado e com nota fiscal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#07d83b]"></span>
                <span className="text-white/85">
                  Melhor preço de Brasília (condições exclusivas)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#07d83b]"></span>
                <span className="text-white/85">
                  Loja física + entrega expressa em até 24h em Brasília
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#07d83b]"></span>
                <span className="text-white/85">
                  Transparência total no pagamento (até 18x no cartão)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#07d83b]"></span>
                <span className="text-white/85">Brinde pra quem fechar hoje</span>
              </li>
            </ul>
            <a
              href="#wa"
              className="mt-8 inline-flex rounded-2xl bg-[#07d83b] text-white px-6 py-3 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
              data-product="CTA Por que Venucce"
            >
              Falar com um especialista
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Sobre a Venucce</h3>
            <p className="mt-3 text-white/80">
              Loja especializada em Apple em Brasília/DF. Inside Sales com foco
              em WhatsApp e experiência premium. Estoque selecionado de MacBooks
              e iPads, priorizando modelos com maior margem para oferecer{" "}
              <span className="text-white">preços competitivos</span> e{" "}
              <span className="text-white">condições flexíveis</span>. Entrega
              expressa em Brasília e retirada em loja física. Transparência
              total e <span className="text-white">avaliação do seu usado como
              entrada</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="frete" className="py-16 bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Como funciona</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-4xl font-black text-[#07d83b]">1</div>
              <h4 className="mt-2 text-xl font-semibold">Escolha o modelo</h4>
              <p className="mt-1 text-white/80">
                Defina entre M2, M3 ou M4 e a configuração ideal.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-4xl font-black text-[#07d83b]">2</div>
              <h4 className="mt-2 text-xl font-semibold">Fale no WhatsApp</h4>
              <p className="mt-1 text-white/80">
                Atendimento consultivo e resposta rápida.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 p-6 text-center">
              <div className="text-4xl font-black text-[#07d83b]">3</div>
              <h4 className="mt-2 text-xl font-semibold">Receba ou retire</h4>
              <p className="mt-1 text-white/80">
                Entrega expressa em Brasília ou retirada na loja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section id="prova-social" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Clientes satisfeitos</h2>
          <p className="text-white/70 mt-2">
            Assista depoimentos reais de quem já comprou seu Mac na Venucce.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-black/60">
                <video controls preload="metadata" className="w-full h-full">
                  <source src="/videos/depo1.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <div className="p-4">
                <div className="text-sm text-white/70">Natália – Águas Claras</div>
                <div className="text-white mt-1">
                  “Fechei o MacBook M3 em 18x. Atendimento incrível!”
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-black/60">
                <video controls preload="metadata" className="w-full h-full">
                  <source src="/videos/depo2.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <div className="p-4">
                <div className="text-sm text-white/70">Carlos – Brasília</div>
                <div className="text-white mt-1">
                  “Produto original, entrega rápida e preço justo.”
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-black/60">
                <video controls preload="metadata" className="w-full h-full">
                  <source src="/videos/depo3.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <div className="p-4">
                <div className="text-sm text-white/70">Victor – Lago Norte</div>
                <div className="text-white mt-1">
                  “Atendimento consultivo e transparente. Recomendo!”
                </div>
              </div>
            </div>
          </div>
          <a
            href="#wa"
            className="mt-8 inline-flex rounded-2xl bg-[#07d83b] text-white px-6 py-3 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
            data-product="CTA Prova Social"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-16 bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text-white/70 mt-2">Clique para revelar as respostas.</p>
          <div className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 overflow-hidden">
            {[
              "Os produtos são originais?",
              "Vocês emitem nota fiscal?",
              "Tem garantia?",
              "Posso parcelar?",
              "Avaliam usado como entrada?",
              "Entregam em Brasília?",
              "Posso retirar na loja?",
              "Tem desconto à vista?",
              "Emitimos para CNPJ?",
              "Ajudam a escolher o melhor modelo?",
              "Entregam para outras cidades?",
              "Os preços mudam?",
              "Tem brinde?",
              "Vocês configuram o Mac?",
              "Como falo com suporte?",
            ].map((q, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer list-none px-5 py-4 hover:bg-white/5 flex items-center justify-between">
                  <span className="font-medium">{q}</span>
                  <span className="transition text-white/60">＋</span>
                </summary>
                <div className="px-5 pb-5 text-white/80">
                  Consulte nossa equipe no WhatsApp para detalhes.
                </div>
              </details>
            ))}
          </div>
          <a
            href="#wa"
            id="precos"
            className="mt-8 inline-flex rounded-2xl bg-[#07d83b] text-white px-6 py-3 font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
            data-product="CTA FAQ"
          >
            Falar com atendimento
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Original, garantido e com o melhor valor de Brasília.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-white/80 mt-3">
            Brinde exclusivo pra quem fechar hoje. Estoque limitado.
          </p>
          <a
            id="cta-final"
            href="#wa"
            className="mt-6 inline-flex rounded-2xl bg-[#07d83b] text-white px-8 py-4 text-lg font-semibold js-wa transition hover:brightness-95 hover:-translate-y-px"
            data-product="CTA Final"
          >
            CHAMAR NO WHATSAPP AGORA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-white/60">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/img/logovenucce.png?v=4" alt="Venucce" className="h-7 w-auto" />
          <div className="text-sm">
            © <span id="year"></span> Venucce • Brasília/DF • Atendimento via WhatsApp
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        id="wa"
        href="#"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#07d83b] text-white px-5 py-3 font-semibold shadow-lg hover:scale-[1.03] transition js-wa"
        data-product="CTA Flutuante"
      >
        WhatsApp
      </a>
    </>
  );
}

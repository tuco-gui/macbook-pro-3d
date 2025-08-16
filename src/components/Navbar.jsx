export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logovenucepreto.png" alt="logo" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#info" className="hover:opacity-80">Informações</a>
          <a href="#frete" className="hover:opacity-80">Custo de Frete</a>
          <a href="#duvidas" className="hover:opacity-80">Dúvidas</a>
          <a href="#precos" className="hover:opacity-80">Preços</a>
          <a href="#contato" className="btn btn-sm rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
            contato
          </a>
        </nav>

        {/* menu mobile simples */}
        <label htmlFor="drawer" className="md:hidden cursor-pointer text-2xl">☰</label>
        <input id="drawer" type="checkbox" className="hidden peer" />
        <div className="peer-checked:block hidden fixed inset-0 bg-black/70">
          <div className="absolute right-0 top-0 h-full w-64 bg-zinc-900 p-6 space-y-5">
            <label htmlFor="drawer" className="text-2xl cursor-pointer">✕</label>
            <a href="#info">Informações</a>
            <a href="#frete">Custo de Frete</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#precos">Preços</a>
            <a href="#contato" className="btn btn-sm rounded-full border-white/20 bg-white text-black">contato</a>
          </div>
        </div>
      </div>
    </header>
  );
}

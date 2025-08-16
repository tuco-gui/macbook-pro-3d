export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <img src="/logovenucepreto.png" alt="logo" className="h-8" />
        <nav className="hidden md:flex gap-8 text-white">
          <a href="#info">Informações</a>
          <a href="#frete">Custo de Frete</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#precos">Preços</a>
        </nav>
        <a href="#contato" className="btn btn-success rounded-full px-4 py-2">contato</a>
      </div>
    </header>
  );
}

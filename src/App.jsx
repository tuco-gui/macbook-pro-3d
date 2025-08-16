import './assets/css/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeMac from './components/ThreeMac';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ThreeMac />
        {/* Sessões futuras da sua LP aqui... */}
      </main>
    </div>
  );
}

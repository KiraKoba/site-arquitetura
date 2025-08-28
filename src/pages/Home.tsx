import '../styles/main.css';
import React from 'react';

console.log("Site da agência de arquitetura carregado.");

const root = document.getElementById('root');
if (root) {
    root.innerHTML = `<h1>Bem-vindo ao nosso site!</h1>`;
}

export default function Home() {
  return (
    <section>
      <h2>Bem-vindo à Arquitetura Moderna</h2>
      <p>
        Somos especialistas em projetos residenciais, comerciais e corporativos, 
        trazendo inovação e funcionalidade para cada espaço.
      </p>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
           alt="Exemplo de arquitetura" style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }} />
    </section>
  );
}
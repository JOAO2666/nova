import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Não Vá Que É Barril</title>
        <meta name="description" content="Aplicativo colaborativo de segurança pública" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Não Vá Que É Barril</h1>
        <p>Um aplicativo colaborativo de segurança pública que permite aos usuários visualizar e reportar ocorrências em tempo real.</p>
        
        <div className="features">
          <h2>Principais Funcionalidades</h2>
          <ul>
            <li>Mapa interativo de ocorrências</li>
            <li>Sistema de classificação de segurança por região</li>
            <li>Alertas em tempo real</li>
            <li>Dicas de segurança</li>
            <li>Integração com autoridades</li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: #f5f5f5;
        }

        h1 {
          margin: 2rem 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
          color: #1a1a1a;
        }

        p {
          margin: 1rem 0 2rem;
          line-height: 1.5;
          font-size: 1.25rem;
          text-align: center;
          max-width: 800px;
          color: #4a4a4a;
        }

        .features {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 800px;
        }

        h2 {
          color: #2a2a2a;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin: 0.5rem 0;
          padding: 0.5rem 0;
          color: #4a4a4a;
          font-size: 1.1rem;
          border-bottom: 1px solid #eaeaea;
        }

        li:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
}

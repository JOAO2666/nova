import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Não Vá App</title>
        <meta name="description" content="Aplicativo para alertas de segurança" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Bem-vindo ao Não Vá App</h1>
        <p>Um aplicativo para ajudar você a se manter seguro.</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        p {
          margin: 1rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagar Detran Online | SeuSite</title>
        <meta
          name="description"
          content="Consulte multas, IPVA e taxas do Detran de qualquer município do Brasil. Pagamento online, rápido e seguro."
        />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Pagar Detran Online</h1>
        <p>
          Consulte e pague taxas do Detran por município de forma rápida e segura.
        </p>

        <h2>Exemplos:</h2>
        <ul>
          <li>
            <Link href="/sp/campinas">Detran Campinas (SP)</Link>
          </li>
          <li>
            <Link href="/sp/osasco">Detran Osasco (SP)</Link>
          </li>
          <li>
            <Link href="/rj/niteroi">Detran Niterói (RJ)</Link>
          </li>
          <li>
            <Link href="/mg/belo-horizonte">Detran Belo Horizonte (MG)</Link>
          </li>
        </ul>

        <p style={{ marginTop: '2rem', color: '#555' }}>
          Este projeto usa geração estática e dinâmicas com Next.js para SEO otimizado por município.
        </p>
      </main>
    </>
  )
}

import Head from "next/head";
import { municipios } from "@/lib/municipios";

export async function getStaticPaths() {
  const paths = municipios.map(({ estado, cidade }) => ({
    params: { estado, cidade },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const { estado, cidade } = params;

  const municipio = municipios.find(
    (m) => m.estado === estado && m.cidade === cidade
  );

  if (!municipio) {
    return { notFound: true };
  }

  return {
    props: {
      estado,
      cidade: municipio.nome,
    },
    revalidate: 86400, // 24 horas
  };
}

export default function MunicipioPage({ estado, cidade }: any) {
  return (
    <>
      <Head>
        <title>Pagar Detran {cidade} | SeuSite</title>
        <meta
          name="description"
          content={`Pague multas, IPVA e taxas do Detran ${cidade} (${estado.toUpperCase()}) com facilidade.`}
        />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1>Pagar Detran {cidade}</h1>
        <p>
          Aqui você consulta débitos, emite boletos e paga online os serviços do
          Detran {cidade}.
        </p>
      </main>
    </>
  );
}

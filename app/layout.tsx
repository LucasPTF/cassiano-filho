import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "PIVE Possível | O Plano do Laboratório Enxuto",
    description:
      "Uma imersão ao vivo com Cassiano Filho para entender a estrutura, o investimento e o modelo de negócio de um laboratório enxuto de PIVE.",
    openGraph: {
      title: "PIVE Possível | O Plano do Laboratório Enxuto",
      description:
        "Coloque a conta na mesa e descubra um caminho técnico e financeiro possível para entrar no mercado de PIVE.",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "PIVE Possível com Cassiano Filho",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PIVE Possível | O Plano do Laboratório Enxuto",
      description:
        "Estrutura, investimento e mercado para quem quer entender a PIVE antes de gastar.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

import ClientLayout from "./components/ClientLayout";
import "../styles/global.css";
import "../styles/main.css";

export const metadata = {
  title: "Твојата финанскиска писменост",
  description:
    "Шпаркасе Банка нуди сигурни и иновативни банкарски решенија за ефикасно управување со вашите лични и деловни финансии.",
  openGraph: {
    title: "Шпаркасе Банка",
    description:
      "Доживејте го најдоброто во личното и деловното банкарство со Шпаркасе Банка.",
    url: "https://www.sparkasse-bank.com",
    siteName: "Шпаркасе Банка",
    locale: "mk_MK",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import "@styles/globals.css";
import { Poppins, Cairo } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/HomeComponents/Navbar";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

const inter = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const noto_sans = Cairo({
  subsets: ["arabic"],
  weight: ["variable"],
});

export const metadata = {
  title: "cod-clone",
  description: "cod-clone",
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${locale === "en" ? inter.className : noto_sans.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

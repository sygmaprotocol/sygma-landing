import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter_Tight } from "next/font/google";
const interTight = Inter_Tight({ subsets: ["latin"] });
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={interTight.className}>
      <Component {...pageProps} />
      {/* <Script src="" */}
    </main>
  );
}

import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import CarouselComponent from "@/components/home/Carousel";
import { ThemeProvider } from "next-theme";
import Card from "@/components/home/Card";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />;
    </Layout>
    
  </ThemeProvider>
  );
}

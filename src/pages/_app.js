import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import CarouselComponent from "@/components/home/Carousel";
import { ThemeProvider } from "next-theme";
import Card from "@/components/home/Card";
import { CartProvider } from "@/utils/ContextReducer";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider attribute="class">
    <CartProvider>
    <Layout>
      <Component {...pageProps} />;
    </Layout>
    </CartProvider>
    
  </ThemeProvider>
  );
}

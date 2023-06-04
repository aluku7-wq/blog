import "@/styles/globals.css";
import { Context } from "@/components/context/Context";
import Navbar from "@/components/navbar/Navbar";
import ToggleScreen from "@/components/togglescreen/ToggleScreen";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Navbar />
      <ToggleScreen />
      <Component {...pageProps} />
      <Footer />
    </Context>
  );
}

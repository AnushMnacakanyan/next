import "@/styles/globals.css";
import Menu from "./component/menu";

export default function App({ Component, pageProps }) {
  return <Menu><Component {...pageProps} /></Menu>
}

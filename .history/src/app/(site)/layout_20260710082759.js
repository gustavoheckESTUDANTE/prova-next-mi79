import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function SiteLayout({ children }) {
  return <>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
  </>
}

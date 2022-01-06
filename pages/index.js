import Head from "next/head";
import {
  About,
  Footer,
  LandingPage,
  PastProjects,
  NavBar,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dejiii | Abdulazeez Adeyiga | Frontend Engineer</title>
        <meta
          name="Dejiii"
          content="Abdulazeez Adeyiga (Dejiii) is a Frontend Engineer highly skilled at developing scalable web and mobile applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <NavBar />
        <LandingPage />
        <About />
        <PastProjects />
      </main>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </div>
  );
}
import Head from "next/head";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Content from "../components/Content";
import Activities from "../components/Activities";

export default function Home() {
  return (
    <div className="bg-[#E5E5E5]">
      <Head>
        <title>Welcome to Narwhal!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div>
          <Sidenav />
        </div>

        <div className="flex flex-col">
          <div>
            <Navbar />
          </div>

          <div>
            <Header />
          </div>

          <div className="flex gap-10 justify-between p-10">
            <div>
              <Content />
            </div>
            <div>
              <Activities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

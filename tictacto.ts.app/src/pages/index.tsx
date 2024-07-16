import { Inter } from "next/font/google";
import { Banner } from "../components/banner";
import { Playground } from "../components/playGround";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div id="home">
          <Banner></Banner>
          <Playground></Playground>
        </div>
      );
}

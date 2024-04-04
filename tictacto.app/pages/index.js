import { Banner } from "./components/banner";
import { Playground } from "./components/playGround";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div id="home">
      <Banner></Banner>
      <Playground></Playground>
    </div>
  );
}

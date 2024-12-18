import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../components/NavBar.js";
import "./globals.css";


export default function Home() {
  return (
    <>
      <div className="w-100">
        <NavBar></NavBar>
      </div>

    </>   
  );
}

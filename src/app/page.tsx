import Image from "next/image";
import styles from './page.module.sass';
import HeaderComponent from "@/components/Header/header";
import MainComponent from "@/components/Main/main";
import FooterComponent from "@/components/Footer/footer";

export default function Home() {
  return (
    <>
      <MainComponent/>
    </>
  );
}

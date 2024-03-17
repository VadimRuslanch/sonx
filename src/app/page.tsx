import Image from "next/image";
import styles from './page.module.sass';
import HeaderComponent from "@/components/common/Header/header";
import MainComponent from "@/components/common/Main/main";
import FooterComponent from "@/components/common/Footer/footer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <MainComponent/>
      <FooterComponent />
    </>
  );
}

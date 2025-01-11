import FooterInfo from "@/components/footerInfo/FooterInfo";
import Header from "@/components/Header";
import MainInfo from "@/components/maininfo/MainInfo";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <p className="py-2 px-[7rem]">sai</p>
      <MainInfo />
      <FooterInfo />
    </div>
  );
}

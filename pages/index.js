import Image from "next/image";
import localFont from "next/font/local";
import Hompage from "../components/Home";
import Layout from "@/components/Layout/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  min-h-screen   font-[family-name:var(--font-geist-sans)]`}
    >
      <Layout>
        <Hompage />
      </Layout>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage2</h1>
      <Link href="/ninjas">See Ninja Listing</Link>
      <Footer />
    </div>
  );
}

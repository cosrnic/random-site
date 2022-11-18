import type { NextPage } from "next";
import Head from "next/head";
import Biscuits from "../components/Biscuits";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div className="bg-dark text-main w-full h-screen">
            <Head>
                <title>Cosmic's Minimalistic Website</title>
            </Head>
            <Navbar />
            <Hero />
            <Biscuits />
        </div>
    );
};

export default Home;

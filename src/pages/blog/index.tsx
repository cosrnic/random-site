import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";

const Blog: NextPage = () => {
    return (
        <div className="bg-dark text-main w-full h-screen">
            <Head>
                <title>Cosmic's Minimalistic Website</title>
            </Head>
            <Navbar />
            <div className="text-3xl font-bold underline">Blog</div>
        </div>
    );
};

export default Blog;

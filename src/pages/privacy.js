import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Quadro's Privacy Policy</title>
        <meta
          name="description"
          content="Read Quadro's Privacy Policy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="privacy-section">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: [Insert Date]</p>
          <p>
            [Insert Privacy Policy content here...]
          </p>
          {/* Add more sections and content as needed */}
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

import Navbar from "../components/Navbar";
import Head from "next/head";
const product = () => {
  return (
    <>
      <Head>
        <title>Product Page </title>
      </Head>
      <Navbar />
      <h1 style={{ color: "blue", textAlign: "center" }}>
        This is Product page
      </h1>
    </>
  );
};

export default product;

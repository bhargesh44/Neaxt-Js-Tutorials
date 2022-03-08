import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1>Hello Contact Page </h1>
      <p className="intro">subscribe to my chanel </p>

      <style jsx>
        {`
          h1 {
            color: pink;
            text-align: center;
          }
          .intro {
            text-align: center;
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;

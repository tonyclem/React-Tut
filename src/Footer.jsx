import React from "react";

const Footer = () => {
  let date = new Date(Date.now());

  return <div>Copyright &copy; {date.getFullYear()}</div>;
};

export default Footer;

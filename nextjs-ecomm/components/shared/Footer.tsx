import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t">
        <div className="p-5 flex-center">
          <p>{new Date().getFullYear()}. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

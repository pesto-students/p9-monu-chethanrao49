import React from "react";
import "./index.css";

const FootBar = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>About Us</h3>
          <p>We help with shortning your lengthy URLs.</p>
        </div>
        <div className="col">
          <h3>Contact Us</h3>
          <p>
            123 Main Street
            <br />
            New York, NY 10001
            <br />
            Phone: (555) 555-5555
            <br />
            Email: info@example.com
          </p>
        </div>
      </div>
      <hr />
      <p className="text-center">
        Copyright © 2023 Shortner. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FootBar;

import React from "react";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <p className="mb-4">@ 2024 Podexo. All rights reserved</p>
        <div className="flex justify-center space-x-4">
          <Button variant="link" className="text-white">
            Privacy policy
          </Button>
        </div>
        <div>
          <Button variant="link" className="text-white">
            Terms of Policy
          </Button>
        </div>
        <div>
          <Button variant="link" className="text-white">
            Contact
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

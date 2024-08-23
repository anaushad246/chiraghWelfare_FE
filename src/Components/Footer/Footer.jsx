import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import GetConnected from "./GetConnected";

function Footer() {
  return (
    <footer className="bg-neutral-100 text-black dark:bg-neutral-600 dark:text-neutral-200  ">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-evenly lg:py-8">
        <div className="   flex flex-col items-center">
          <span className="text-lg font-bold text-center pt-4">
            Get connected with us{" "}
          </span>
          <div className="mt-4">
            <GetConnected />
          </div>
        </div>
        {/*  */}

         <div className="flex flex-col items-center gap-3">
    <h6 className="font-semibold text-xl">Contact</h6>
    <div className="flex gap-2 items-center px-4">
      <FontAwesomeIcon icon={faLocationDot} size="lg" />
      <div className="flex flex-col items-center">
        <p className="text-sm font-bold">Branch Office</p>
        <span>Sohraul, Benipatti, Madhubani Bihar 847223</span>
      </div>
    </div>
    <div className="flex gap-2 items-center px-4">
      <FontAwesomeIcon icon={faLocationDot} size="lg" />
      <div className="flex flex-col items-center">
        <p className="text-sm font-bold">Head Office</p>
        <span>Inderlok, New Delhi, 110035</span>
      </div>
    </div>
    <div className="flex gap-2 items-center text-sm">
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
      <a href="mailto:chiraghfoundation@gmail.com">chiraghfoundation@gmail.com</a>
    </div>
    <div className="flex items-center">
      <FontAwesomeIcon icon={faPhone} size="lg" className="mr-3" />
      <a href="tel:+7654746192">7654746192</a>
    </div>
  </div>
  

  </div>
  <div className="bg-neutral-200 p-2 text-center dark:bg-neutral-700 mt-4 w-screen">
    <span> 2024 &copy; </span>
    <a href="#" className="font-normal text-neutral-600 dark:text-neutral-400">
      Chirag Welfare Foundation
    </a>
  </div>
    </footer>
  );
}

export default Footer;

"use client";
import React, { useEffect, useState } from "react";

const CookiesPopup = () => {
  const [cookieState, setCookieState] = useState(false);

  const handleCookieAccept = () => {
    localStorage.setItem("qc684dd3d48sd", true);
  };

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("qc684dd3d48sd");
    if (cookieAccepted) {
      setCookieState(true);
    } else {
      setCookieState(false);
    }
  }, []);

  if (cookieState) {
    return null;
  }

  return (
    !cookieState && (
      <div className="fixed bottom-0 left-0 right-0 w-full bg-zinc-700 text-white py-4 px-6 text-center">
        <p>
          Ce site web utilise des cookies pour vous garantir une expérience
          optimale.
          <button
            className="ml-3 text-teal-400 outline outline-teal-400 outline-1 py-2 px-3 rounded-md hover:bg-teal-400 hover:text-white transition-colors duration-300 ease-in-out"
            onClick={() => {
              setCookieState(true);
              handleCookieAccept();
            }}
          >
            Got it!
          </button>
        </p>
      </div>
    )
  );
};

export default CookiesPopup;

import React, { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // console.log("foo")
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};

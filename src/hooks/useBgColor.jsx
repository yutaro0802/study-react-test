import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  console.log(router);

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
  }, [ router.pathname])

  useEffect(() => {
    // console.log("foo")
    document.body.style.backgroundColor =
      bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};

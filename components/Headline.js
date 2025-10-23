import React from "react";


export function Headline(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <code>page/{props.page}.js</code>
    </>
  );
}





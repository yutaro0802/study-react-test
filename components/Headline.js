import React from "react";


export function Headline(props) {
  // props = {pagename}
  console.log(props)
  return (
    <>
      <h1>{props.title}</h1>
      <code>page/{props.page}.js</code>
    </>
  );
}





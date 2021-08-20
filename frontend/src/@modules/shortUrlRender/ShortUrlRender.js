import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
function ShortUrlRender() {
  
  const { name } = useParams();
  const history = useHistory();
  
  const getActualUrl = () => {
    if (name) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/short-url/${name}`)
        .then((res) => res.json())
        .then((resultss) => {
          if (resultss.response.length > 0) {
            window.location.href = `${resultss.response[0].actualUrl}`;
          } else {
            history.push("/");
          }
        })
        .catch((e) => console.log("error"));
    } else {
    }
  };
  useEffect(() => {
    getActualUrl();
  });
  return <div></div>;
}

export default ShortUrlRender;

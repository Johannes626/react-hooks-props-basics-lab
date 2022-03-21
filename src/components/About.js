import React from "react";
import Links from "./Links.js"


function About(props) {
  // const bio = props.user.bio
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.user.bio !== "" ? <p>{props.user.bio}</p> : null}
      {/* <p>{props.user.bio !== "" ? props.user.bio : null}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.user.links}/>
    </div>
  );
}

export default About;
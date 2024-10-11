import React from "react";
import "@/app/ptkl.css";
import SignInButton from "./signin-button";
import CountDown from "./countdown";
import { auth } from "@/auth";

const StarSky = async () => {
  const session = await auth();
  console.log(session);
  return (
    <section className="py-10 bg-gradient-to-tr from-blue-500/40 to-green-500/40 w-screen">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <CountDown />
      {!session ? <SignInButton /> : <div></div>}
    </section>
  );
};

export default StarSky;

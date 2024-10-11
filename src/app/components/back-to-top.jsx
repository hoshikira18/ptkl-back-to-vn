"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const scrollToTop = () => {};

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-5 bg-white/60 rounded-full"
    >
      <ArrowUp />
    </div>
  );
};

export default BackToTop;

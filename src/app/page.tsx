"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   redirect("/venues");
  // }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>
        NOT - redirecting to <a href="/venues">/venues</a>
      </p>
    </div>
  );
}

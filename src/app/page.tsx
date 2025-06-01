"use client";

import React from "react";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import Content from "@/components/content";

export default function Page() {
  return (
    <main className="position-relative d-flex flex-column" id="home">
      <div className="position-sticky top-0 z-0">
        <Hero />
        <Contacts />
      </div>
      <Content />
    </main>
  );
}

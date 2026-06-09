"use client";

import dynamic from "next/dynamic";

const FlodeskForm = dynamic(() => import("./FlodeskForm"), { ssr: false });

export default function FlodeskFormWrapper() {
  return <FlodeskForm />;
}

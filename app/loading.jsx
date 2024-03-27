import React from "react";
import LoadingSkeleton from "./components/LoadingSkeleton";

export default async function Loading() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <LoadingSkeleton />
    </main>
  );
}

import React from "react";
import LoadingSkeleton from "./components/LoadingSkeleton";

export default async function Loading() {
  return (
    <main className="min-h-[50vh] md:min-h-screen w-full flex justify-center items-center mx-auto ml-8">
      <LoadingSkeleton />
    </main>
  );
}

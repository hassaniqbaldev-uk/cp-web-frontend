"use client";

import Loader from "@/components/layout/Loader";
import { useLoaderStore } from "@/store/loaderStore";

export default function HomePageLoader({ children }) {
  const loaderDone = useLoaderStore((state) => state.loaderDone);

  return (
    <>
      {!loaderDone && <Loader />}
      {children}
    </>
  );
}

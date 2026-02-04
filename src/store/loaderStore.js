import { create } from "zustand";

export const useLoaderStore = create((set) => ({
  loaderDone: false,
  setLoaderDone: () => set({ loaderDone: true }),
}));

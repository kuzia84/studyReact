import { useEffect } from "react";

export function useTitle(name) {
  useEffect(() => {
    document.title = name;
    return () => (document.title = "McDonats");
  });
}

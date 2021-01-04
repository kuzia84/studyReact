import { useState } from "react";

export function useCount(openItem) {
  const value = openItem.count ? openItem.count : 1;
  const [count, setCount] = useState(value);
  const onChange = (e) => setCount(e.target.value);
  return { count, setCount, onChange };
}

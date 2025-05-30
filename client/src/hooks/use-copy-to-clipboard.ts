import { useState, useCallback } from "react";

export function useCopyToClipboard() {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      return false;
    }
  }, []);

  return { copyToClipboard, hasCopied };
}

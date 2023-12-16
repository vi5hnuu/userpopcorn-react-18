import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(
    function () {
      function callback(e: any) {
        if (e.code.toLowerCase() !== key.toLowerCase()) {
          return;
        }
        return action();
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}

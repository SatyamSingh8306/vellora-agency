"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "../lib/constants";

declare global {
  interface Window {
    __velloraCalReady?: boolean;
  }
}

export default function CalProvider() {
  useEffect(() => {
    void (async () => {
      try {
        const cal = await Promise.race([
          getCalApi({ namespace: CAL_NAMESPACE }),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("cal-timeout")), 8000),
          ),
        ]);
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        window.__velloraCalReady = true;
      } catch {
        window.__velloraCalReady = false;
      }
    })();
  }, []);

  return null;
}

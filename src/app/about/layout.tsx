import type { PropsWithChildren } from "react";

export default function Worker({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}

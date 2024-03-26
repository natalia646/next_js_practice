import type { PropsWithChildren } from "react";

export default function LeftSide({ children }: PropsWithChildren<unknown>) {
  return <div> LeftSideLayout {children} </div>;
}

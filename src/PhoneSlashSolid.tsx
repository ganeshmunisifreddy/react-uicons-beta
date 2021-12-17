import * as React from "react";

function PhoneSlashSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="m23.707 1.711-22 22a1 1 0 0 1-1.414-1.418l5.043-5.041C1.147 12.594-2.236 6.317 1.784 1.868l1.15-1A3.081 3.081 0 0 1 7.26.911c.031.03 1.884 2.437 1.884 2.437a3.1 3.1 0 0 1-.007 4.281l-1.6 1.9a14.2 14.2 0 0 0 2.113 3.409L22.293.3a1 1 0 0 1 1.414 1.411Zm-3.051 13.147a3.1 3.1 0 0 0-4.281.006l-1.906 1.606c-.4-.17-.785-.359-1.157-.562a.983.983 0 0 0-1.162.178l-3.061 3.061a1 1 0 0 0 .1 1.509c4.408 2.976 9.111 5.042 12.99 1.51l.91-1.048a3.1 3.1 0 0 0 0-4.377 359.274 359.274 0 0 0-2.433-1.883Z" />
    </svg>
  );
}

export default PhoneSlashSolid;

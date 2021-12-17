import * as React from "react";

function SnowflakeSolid(props: any) {
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
      <path d="m22.761 13.971-2.445.646a2.7 2.7 0 0 0-.984.491L16.738 13.6a5.042 5.042 0 0 0 0-3.2l2.594-1.509a2.7 2.7 0 0 0 .984.491s2.617.679 2.7.679a1 1 0 0 0 .256-1.961l-2.444-.647a.715.715 0 0 1-.508-.873l.647-2.444a1 1 0 1 0-1.934-.512l-.646 2.444a2.7 2.7 0 0 0-.061 1.1l-2.6 1.51A5 5 0 0 0 13 7.1v-3a2.707 2.707 0 0 0 .919-.6l1.788-1.788A1 1 0 0 0 14.293.293l-1.788 1.788a.718.718 0 0 1-1.01 0L9.707.293a1 1 0 0 0-1.414 1.414L10.081 3.5a2.707 2.707 0 0 0 .919.6v3a5 5 0 0 0-2.73 1.574l-2.6-1.51a2.7 2.7 0 0 0-.061-1.1L4.967 3.62a1 1 0 1 0-1.934.512l.647 2.444a.715.715 0 0 1-.508.873L.728 8.1a1 1 0 0 0 .254 1.966c.085 0 2.7-.679 2.7-.679a2.7 2.7 0 0 0 .984-.491L7.262 10.4a5.042 5.042 0 0 0 0 3.2l-2.594 1.508a2.7 2.7 0 0 0-.984-.491l-2.445-.646A1 1 0 0 0 .728 15.9l2.444.647a.715.715 0 0 1 .508.873l-.647 2.444a1 1 0 1 0 1.934.512l.646-2.444a2.7 2.7 0 0 0 .061-1.1l2.6-1.51A5 5 0 0 0 11 16.9v3a2.707 2.707 0 0 0-.919.6l-1.788 1.793a1 1 0 0 0 1.414 1.414l1.793-1.788a.718.718 0 0 1 1.01 0l1.788 1.788a1 1 0 0 0 1.414-1.414l-1.788-1.788A2.707 2.707 0 0 0 13 19.9v-3a5 5 0 0 0 2.73-1.573l2.6 1.51a2.7 2.7 0 0 0 .061 1.1l.646 2.444a1 1 0 0 0 1.934-.512l-.647-2.444a.715.715 0 0 1 .508-.873l2.444-.647a1 1 0 1 0-.511-1.933Z" />
    </svg>
  );
}

export default SnowflakeSolid;

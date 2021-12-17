import * as React from "react";

function MicrophoneAlt(props: any) {
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
      <path d="M18.757 16a5.214 5.214 0 0 0-3.707 1.535A15.14 15.14 0 0 1 4.272 22h-1.15a1.121 1.121 0 0 1-.794-1.914l.693-.693a7.768 7.768 0 0 0 5.1-2.272l4.326-4.321a6.01 6.01 0 0 0 1.292.2H14a6.018 6.018 0 0 0 4.246-1.758l1-1a6.01 6.01 0 0 0 1.751-4.5A5.946 5.946 0 0 0 18.848 1.4a6.179 6.179 0 0 0-8.274.544l-.633.634a6.33 6.33 0 0 0-1.694 5.933l-4.368 4.368a7.759 7.759 0 0 0-2.272 5.1l-.693.693A3.121 3.121 0 0 0 3.122 24h1.15a17.13 17.13 0 0 0 12.192-5.05A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.757 16Zm-7.4-12.012.633-.634a4.413 4.413 0 0 1 3.1-1.3 3.815 3.815 0 0 1 2.471.877A3.971 3.971 0 0 1 19 5.826a4.013 4.013 0 0 1-1.167 3l-1 1a4 4 0 0 1-5.9-.266 4.169 4.169 0 0 1 .422-5.572ZM5.293 14.293l3.836-3.837c.091.13.164.27.267.393a6.119 6.119 0 0 0 1.131 1.038l-3.82 3.82a5.789 5.789 0 0 1-3.018 1.6 5.789 5.789 0 0 1 1.604-3.014Z" />
    </svg>
  );
}

export default MicrophoneAlt;

import * as React from "react";

function EnvelopeOpen(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path d="m22.459 8.1-6.924-6.636a5.026 5.026 0 0 0-7.055-.015L1.54 8.1A5.028 5.028 0 0 0 0 11.708V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7.292A5.025 5.025 0 0 0 22.459 8.1ZM9.879 2.878a3.013 3.013 0 0 1 4.258.016l6.747 6.464-6.763 6.764a3.074 3.074 0 0 1-4.242 0L3.115 9.358ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7.292a3.014 3.014 0 0 1 .059-.578l6.406 6.406a5.024 5.024 0 0 0 7.07 0l6.406-6.406a3.014 3.014 0 0 1 .059.578Z" />
    </svg>
  );
}

export default EnvelopeOpen;

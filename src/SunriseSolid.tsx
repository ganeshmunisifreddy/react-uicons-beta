import * as React from "react";

function SunriseSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M0 12a1 1 0 0 1 1-1h4.071a6.948 6.948 0 0 1 .434-1.609L1.982 7.349a1 1 0 1 1 1-1.731L6.51 7.662A7.053 7.053 0 0 1 7.662 6.51L5.618 2.984a1 1 0 0 1 1.731-1L9.39 5.505A6.943 6.943 0 0 1 11 5.071V1a1 1 0 0 1 2 0v4.071a6.948 6.948 0 0 1 1.609.434l2.042-3.524a1 1 0 0 1 1.731 1L16.338 6.51a7.053 7.053 0 0 1 1.152 1.152l3.525-2.044a1 1 0 0 1 1 1.731L18.5 9.391A6.948 6.948 0 0 1 18.929 11H23a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm22.332 9.489a2.2 2.2 0 0 1-3.385-.811 1 1 0 0 0-1.889-.011 2.275 2.275 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.274 2.274 0 0 1-4.114 0 1 1 0 0 0-1.885 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.338 1.489A4.185 4.185 0 0 0 6 22.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.489Zm0-5a2.2 2.2 0 0 1-3.385-.811 1 1 0 0 0-1.889-.011 2.275 2.275 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.274 2.274 0 0 1-4.114 0 1 1 0 0 0-1.885 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.338 1.489A4.185 4.185 0 0 0 6 17.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.489Z" />
    </svg>
  );
}

export default SunriseSolid;

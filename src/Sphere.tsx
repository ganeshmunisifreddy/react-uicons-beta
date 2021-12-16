import * as React from "react";

function Sphere(props: any) {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 16c-5.724 0-10-2.111-10-4s4.276-4 10-4 10 2.111 10 4-4.276 4-10 4Zm0-14a10.013 10.013 0 0 1 9.189 6.062A18.635 18.635 0 0 0 12 6a18.635 18.635 0 0 0-9.189 2.062A10.013 10.013 0 0 1 12 2Zm0 20a10.013 10.013 0 0 1-9.189-6.062A18.635 18.635 0 0 0 12 18a18.635 18.635 0 0 0 9.189-2.062A10.013 10.013 0 0 1 12 22Z" />
    </svg>
  );
}

export default Sphere;

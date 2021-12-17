import * as React from "react";

function Fill(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      fill="currentColor"
      {...props}
    >
      <path d="M22.327 18.422C23.055 19.456 24 20.651 24 21.5a2.5 2.5 0 0 1-5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1-7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89A1 1 0 0 1 5.74 1.216L8.588 4.1l1.548-1.55-.843-.843A1 1 0 0 1 10.707.293l13 13a1 1 0 1 1-1.414 1.414zm-1.414-1.414L11.55 3.964 9.993 5.522l4.718 4.778a1 1 0 1 1-1.422 1.4L8.58 6.935l-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z" />
    </svg>
  );
}

export default Fill;

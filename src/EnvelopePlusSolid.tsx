import * as React from "react";

function EnvelopePlusSolid(props: any) {
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
      <path d="M9.878 14.546.744 5.411A4.986 4.986 0 0 1 5 3h7.294a7.037 7.037 0 0 0 4.675 8.7l-2.847 2.848a3.007 3.007 0 0 1-4.244-.002Zm5.658 1.414a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.894a6.972 6.972 0 0 1-4.478 2.08ZM15 6h3v3a1 1 0 0 0 2 0V6h3a1 1 0 0 0 0-2h-3V1a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2Z" />
    </svg>
  );
}

export default EnvelopePlusSolid;

import * as React from "react";

function BasketballSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="M4.259 2.845A11.943 11.943 0 0 1 11 .051v1.3a11.938 11.938 0 0 0 2.28 6.689 1.09 1.09 0 0 1-.137 1.4l-.367.367a1.1 1.1 0 0 1-1.552 0zM17.59 7.824a1.1 1.1 0 0 0 .186 1.711A9.939 9.939 0 0 0 22.706 11h1.243a11.943 11.943 0 0 0-2.794-6.741zM13 .051v1.272a9.9 9.9 0 0 0 1.465 4.9 1.1 1.1 0 0 0 1.71.186l3.566-3.566A11.941 11.941 0 0 0 13 .051zm1.557 10.806-.367.367a1.1 1.1 0 0 0 0 1.552l6.965 6.965A11.941 11.941 0 0 0 23.949 13h-1.272a11.966 11.966 0 0 1-6.717-2.28 1.092 1.092 0 0 0-1.403.137zm-5.114 2.286.367-.367a1.1 1.1 0 0 0 0-1.552L2.845 4.259A11.941 11.941 0 0 0 .051 11h1.272a11.964 11.964 0 0 1 6.717 2.28 1.092 1.092 0 0 0 1.403-.137zm1.781 1.047-.367.367a1.092 1.092 0 0 0-.137 1.4A11.929 11.929 0 0 1 13 22.648v1.3a11.941 11.941 0 0 0 6.741-2.794l-6.965-6.964a1.1 1.1 0 0 0-1.552 0zM11 22.677a9.9 9.9 0 0 0-1.465-4.9 1.1 1.1 0 0 0-1.71-.185l-3.566 3.563A11.941 11.941 0 0 0 11 23.949zM1.294 13H.051a11.943 11.943 0 0 0 2.794 6.741l3.565-3.565a1.1 1.1 0 0 0-.186-1.711A9.939 9.939 0 0 0 1.294 13z" />
    </svg>
  );
}

export default BasketballSolid;
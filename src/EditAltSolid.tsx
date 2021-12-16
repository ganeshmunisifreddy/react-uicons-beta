import * as React from "react";

function EditAltSolid(props: any) {
  const { size = "1em" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      width={size}
      height={size}
      {...props}
    >
      <path d="M304.661 287.061 499.605 92.117c16.2-16.175 18.966-47.974-9.067-65.344-23.989-11.806-42.541-1.743-51.179 8.341l-187.05 207.169a106.793 106.793 0 0 1 52.352 44.778zM106.667 405.333h106.667c35.346 0 64-28.654 64-64s-28.654-64-64-64c-85.334 0-106.667 128-106.667 128z" />
      <path d="M341.333 405.333c0-35.346 28.654-64 64-64H512v-201.28L319.147 332.907c.235 2.837.853 5.547.853 8.427-.071 58.88-47.786 106.596-106.667 106.666H106.667c-23.564.003-42.669-19.097-42.672-42.661 0-2.353.194-4.703.581-7.024 9.685-58.069 49.237-154.325 136.384-162.816L407.573 6.677a82.171 82.171 0 0 1 6.4-5.803C411.072.64 408.299 0 405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h234.667V405.333z" />
      <path d="M405.333 384C393.551 384 384 393.551 384 405.333V505.6a105.894 105.894 0 0 0 40.064-24.832l56.704-56.704A105.894 105.894 0 0 0 505.6 384H405.333z" />
    </svg>
  );
}

export default EditAltSolid;

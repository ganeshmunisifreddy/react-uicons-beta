import * as React from "react";

function AddressBookSolid(props: any) {
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
      <path d="M12 9a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm11-4v14a5.006 5.006 0 0 1-5 5H8a5 5 0 0 1-4.576-3H2a1 1 0 0 1 0-2h1v-2H2a1 1 0 0 1 0-2h1v-2H2a1 1 0 0 1 0-2h1V9H2a1 1 0 0 1 0-2h1V5H2a1 1 0 0 1 0-2h1.424A5 5 0 0 1 8 0h10a5.006 5.006 0 0 1 5 5ZM10 9a3 3 0 0 0 6 0 3 3 0 0 0-6 0Zm8 9c-.211-6.608-9.791-6.606-10 0a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0Z" />
    </svg>
  );
}

export default AddressBookSolid;

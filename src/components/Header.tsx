import React from "react";

function Header() {
  return (
    <div className="px-4 md:px-10 py-4 md:py-7">
      <div className="flex items-center justify-between">
        <p
          tabIndex={0}
          className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
        >
          Releasin Test
        </p>
      </div>
    </div>
  );
}

export default Header;

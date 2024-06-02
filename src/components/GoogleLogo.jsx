import Image from "next/image";
import React from "react";

const GoogleLogo = () => {
  return (
    <div className="flex flex-col items-center mt-9">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Transparent_google_logo_2015.png"
        alt="Google Logo"
        width={350}
        height={100}
        className="w-auto"
      />
    </div>
  );
};

export default GoogleLogo;

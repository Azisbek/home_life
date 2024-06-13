import React from "react";
import Profile from "../../../assets/profile.png";
import Image from "next/image";

const AppProfileHeader = () => {
  return (
    <div>
      <Image src={Profile} width={24} height={24} />
    </div>
  );
};

export default AppProfileHeader;

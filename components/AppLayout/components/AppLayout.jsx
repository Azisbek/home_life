import React from "react";
import { AppHeader } from "../../AppHeader";
import { AppFooter } from "../../AppFooter";

export const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <AppHeader />
        {/* {isMobile ? <AppHeaderMobile /> : <AppHeader header={headerFooter} />} */}
      </div>

      {/* {visible ? <AppSideBar header={headerFooter} /> : null} */}

      <main className='container'>{children}</main>

      <AppFooter />
    </>
  );
};

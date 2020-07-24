import React from "react";
import Registration from "./1-Registration";
import PageDems from "../9-UniComps/2-PageDems/0-PageDems";

const AdminAuth = () => {
  return (
    <PageDems>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-rows-2">
          <h1>AdminAuth Goes Here</h1>
          <Registration />
        </div>
      </div>
    </PageDems>
  );
};

export default AdminAuth;

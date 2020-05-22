import { FetchData } from "../utils/helper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default () => {
  const user = useSelector((state) => state.userInfo);

  return (
    <React.Fragment>
      <h4>User Information</h4>
      {user != undefined && (
        <>
          <p className="ml-4">
            {user.user_name
              ? `Name: ${user.first_name} ${user.last_name}`
              : "Loading..."}
          </p>
          <p className="ml-4">
            {user.user_name ? `Username: ${user.user_name}` : "loading..."}
          </p>
        </>
      )}
    </React.Fragment>
  );
};

import React from "react";
import { MagicSpinner } from "react-spinners-kit";
const Loader = ({ loading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        zIndex: "1000",
        padding: "50px",
        alignItems: "center",
      }}
    >
      <MagicSpinner size={50} color="gray" loading={loading} />
    </div>
  );
};

export default Loader;

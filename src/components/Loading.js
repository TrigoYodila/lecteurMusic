import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <CircularProgress disableShrink />;
    </div>
  );
}

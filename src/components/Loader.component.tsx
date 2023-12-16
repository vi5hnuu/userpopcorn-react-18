import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader({ loading, className = "" }: { loading: boolean; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <ClipLoader size={35} loading={loading} color="#6741d9" />
    </div>
  );
}

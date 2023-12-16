import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader({ loading }: { loading: boolean }) {
  return <ClipLoader size={35} loading={loading} color="#36d7b7" />;
}

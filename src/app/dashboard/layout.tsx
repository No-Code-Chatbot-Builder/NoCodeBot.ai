import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Sidebar id={"userid"} />
      <div className="md:pl-[360px]">{children}</div>
    </div>
  );
};

export default layout;

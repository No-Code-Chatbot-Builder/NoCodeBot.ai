import React from "react";
import MenuOptions from "./menu-options";

type Props = {
  id: string;
};

type SidebarOption = {
  heading: string;
  items: { name: string }[];
};

const Sidebar = async ({ id }: Props) => {
  const sidebarOpt: SidebarOption[] = [
    {
      heading: "Explore Custom Agents",
      items: [{ name: "Featured" }, { name: "My GPT's" }],
    },
    {
      heading: "Categories",
      items: [
        { name: "Agents" },
        { name: "Datasets" },
        { name: "API Keys" },
        { name: "Discover" },
        { name: "Settings" },
      ],
    },
  ];

  return (
    <>
      <MenuOptions defaultOpen={true} id={id} sidebarOpt={sidebarOpt} />
      <MenuOptions id={id} sidebarOpt={sidebarOpt} />
    </>
  );
};

export default Sidebar;

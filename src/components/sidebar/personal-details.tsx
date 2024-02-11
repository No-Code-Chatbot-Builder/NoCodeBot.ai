import React from "react";
import { Avatar } from "../ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const PersonalDetails = () => {
  return (
    <div className="flex flex-col gap-2 py-2 justify-center items-center mt-2 mb-2">
      <div className="flex flex-row gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>IB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold">Ibrahim Sheikh</h3>
          <p className="text-xs text-muted-foreground">
            ibrahimsheikht@gmail.com
          </p>
        </div>
        <MoreHorizontal />
      </div>
    </div>
  );
};

export default PersonalDetails;

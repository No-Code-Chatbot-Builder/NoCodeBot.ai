import React from "react";
import { Button } from "../ui/button";

const InviteAFriend = () => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="font-bold">Invite a friend and get $10 off</h1>
      <p className="text-sm text-muted-foreground">
        Recommend our website to your friends and get $10 off when they make a
        account
      </p>
      <Button className="bg-card">Invite Friend</Button>
    </div>
  );
};

export default InviteAFriend;

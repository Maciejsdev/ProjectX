import { Button } from "../ui/button";
import UserCard from "./UserCard";
import React, { useState, useEffect } from "react";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <p className="text-sm pl-4 font-semibold">Followed</p>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />

      <p className="text-sm pl-4 font-semibold">Featured</p>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default Sidebar;

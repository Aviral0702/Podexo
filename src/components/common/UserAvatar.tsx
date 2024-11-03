import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
function UserAvatar({ image, name }: { image: string; name: string }) {
  return (
    <Avatar>
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;

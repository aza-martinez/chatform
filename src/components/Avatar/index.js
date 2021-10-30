import React from "react";
import AvatarImg from "./../../assets/images/avatar.jpg";
import StyledAvatar from "./StyledAvatar";

const Avatar = () => {
  return <StyledAvatar src={AvatarImg} alt="Avatar" height="55" width="55" />;
};

export default Avatar;

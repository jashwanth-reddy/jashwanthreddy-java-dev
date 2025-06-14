
import React from "react";

type ProfilePhotoProps = {
  className?: string;
  src?: string;
};

const DEFAULT_PROFILE_SRC = "/lovable-uploads/076fc08f-970a-46ca-8b5f-37a825787bcd.png";

function ProfilePhoto({ className = "", src }: ProfilePhotoProps) {
  return (
    <div
      className={`overflow-hidden rounded-full border-4 border-primary shadow-lg bg-background ${className}`}
      style={{ width: 120, height: 120, minWidth: 120, minHeight: 120 }}
    >
      <img
        src={src || DEFAULT_PROFILE_SRC}
        alt="Jashwanth Reddy Karumudi"
        className="object-cover w-full h-full"
        draggable={false}
      />
    </div>
  );
}

export default ProfilePhoto;


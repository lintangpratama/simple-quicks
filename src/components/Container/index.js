import React from "react";

export default function Container({ children }) {
  return (
    <div className="relative mx-8 my-6 h-full">
      {children}
    </div>
  );
}

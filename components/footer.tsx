import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Rahul R. Yadav. All rights reserved.
      </small>
    </footer>
  );
}
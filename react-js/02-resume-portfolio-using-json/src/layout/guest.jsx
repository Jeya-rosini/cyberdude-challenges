import React from "react";
import TheNavbar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";
import TheButton from "../components/TheButton";

const Guest = () => {
  return (
    <section className="bg-[#005f73] max-w-3xl mx-auto mt-5 rounded shadow-xl shadow-neutral-400">
      <TheNavbar />
      <Outlet />
    </section>
  );
};

export default Guest;

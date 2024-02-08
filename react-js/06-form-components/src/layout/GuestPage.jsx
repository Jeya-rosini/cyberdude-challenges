import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";

const GuestPage = () => {
  return (
    <>
      <TheNavbar />
      <Outlet />
    </>
  );
};

export default GuestPage;

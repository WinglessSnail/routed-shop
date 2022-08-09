import { Link, Outlet } from "react-router-dom";

export const Nothing = () => {
  return (
    <>
      <Link to="login"></Link>
      <Outlet />
    </>
  );
};

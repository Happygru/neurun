import { Outlet } from "react-router-dom";
import Logo from "./Logo";

const HomeLayout = () => {
  return (
    <>
      <div className="w-full bg-[url('@/assets/img/background.png')] bg-cover bg-center bg-no-repeat">
        <Logo className="absolute left-10 top-11 w-16 cursor-pointer" />
        <Outlet />
        <div className="h-[70px] w-full bg-black/80"></div>
      </div>
    </>
  );
};

export default HomeLayout;

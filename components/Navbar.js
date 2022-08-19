import Image from "next/image";
import CaretDown from "./icons/CaretDown";
import MenuNotification from "./icons/MenuNotification";
import Resume from "../public/resume.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [currentUserData, setCurrentUserData] = useState([]);

  useEffect(() => {
    async function getCurrentUserData() {
      const res = await fetch(
        "https://mocki.io/v1/6f396a3e-1470-41cf-946b-cadadfc41ab2"
      );
      const data = await res.json();
      const currentUserData = data.current_user;
      setCurrentUserData(currentUserData);
    }
    getCurrentUserData();
  }, []);

  return (
    <div className="flex flex-row  border-b-2 border-gray-200 h-16 bg-white">
      <div className=" py-5 px-6 flex items-center border-r-2 border-gray-200 text-gray-500 font-bold">
        <h1>NARWHAL</h1>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex   p-5 items-center">
          <p>Teams</p>
        </div>

        <div className="flex   p-5 items-center gap-5">
          <MenuNotification />
          <p>Hello, {currentUserData.name}</p>
          {currentUserData.avatar && (
            <Image
              src={currentUserData.avatar}
              className="cursor-pointer rounded-full "
              width={40}
              height={40}
            />
          )}
          <CaretDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

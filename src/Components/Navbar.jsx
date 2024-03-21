import { PiHandWavingBold } from "react-icons/pi";
import { IoIosRefresh } from "react-icons/io";

const Navbar = ({handleSubmit}) => {
  return (
    <nav>
      <div className="flex items-center gap-2 justify-evenly">
        <div className="flex items-center gap-2 text-gray-700">
          <h1 className="font-bold text-center my-4">Hello, there</h1>
          <PiHandWavingBold className="text-2xl" />
        </div>

        <div className="flex items-center gap-2">
          <h1>Refresh</h1>
          <button onClick={handleSubmit}>
            <IoIosRefresh />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

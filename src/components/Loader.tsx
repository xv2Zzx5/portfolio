import { LuLoaderCircle } from "react-icons/lu";

const Loader = () => {
    return (
        <div className=" min-h-screen fixed top-0 left-0 w-full flex justify-center items-center">
            <LuLoaderCircle className="text-primary-200 text-2xl animate-spin" />
        </div>
    );
};

export default Loader;

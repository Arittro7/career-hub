import { NavLink } from "react-router-dom";
import notFound from '../../assets/images/404.jpg'
import { HiHome } from "react-icons/hi2";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center mt-2 flex justify-center ">
      <NavLink to={'/'}>
       <button className="text-4xl p-3 font-bold border-2 rounded-xl border-green-500 flex ">  <HiHome className="mr-3 text-green-500"></HiHome>Home</button>
      </NavLink></div>
      <div className="flex justify-center">
      <img className="h-[500px]" src={notFound} alt="" />
      </div>
    </div>

  );
};

export default ErrorPage;
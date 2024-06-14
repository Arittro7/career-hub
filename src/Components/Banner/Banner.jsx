import user from '../../assets/images/user.png' 

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center">
        <div className="w-1/2 flex justify-center items-center">
          <img src={user} />
        </div>
        <div className="w-1/2 text-left pl-9">
          <h1 className="text-5xl font-bold ">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Home = ({isHome, setIsHome}) => {
    return (
      <div className="flex flex-col">
        <img
          src="https://assets-global.website-files.com/607996c5da7d8571c8760990/61c354c59f7135623316390f_Article%20info%20graphic%20%E2%80%93%202.jpg"
          alt="random"
          className="w-full h-64 mx-auto rounded-b-lg"
        />
        <div className="max-w-64 mx-auto">
          <h1 className="text-3xl font-bold text-center my-4">
            Welcome to Crypto Tracker
          </h1>
          <p className="text-lg text-center text-gray-600">
            Indicate trends and prices of top gainers and losers.
          </p>
          {/* <Link to="/card"> */}
            <button onClick={()=>{setIsHome(!isHome)}} className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg my-4 mx-auto block">
              Get Started
            </button>
          {/* </Link> */}
        </div>
      </div>
    );
}

export default Home;
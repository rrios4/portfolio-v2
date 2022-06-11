import React from "react";

const WorkCard = ({ img, name, description, onClick, date, repoURL, techIcons, active }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0">
      <div
        className="overflow-hidden cursor-pointer rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "400px" }}
        onClick={onClick}>
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
      </div>
      <div className="flex">
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        {active === true ? <div className="flex justify-center mt-[20px] mx-[1rem] w-[50px] h-[30px] bg-green-500 rounded-full"><h1 className="text-white m-1">Live</h1></div> : "" }
      </div>
      <h2 className="text-lg opacity-70">
        {date ? date : "Project Date"}
      </h2>
      <div className="flex my-1 space-x-[1rem] w-[40px] h-[35px]">
          {techIcons?.map((icon, index) => (<>{icon ? <img key={index} className="w-[35px] rounded-full p-1" src={icon.url}/> : ""}</>))}
      </div>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div>
        {repoURL ? <button onClick={() => window.open(repoURL)} className="my-[1rem] mr-[1rem] p-[1rem] rounded-xl bg-gray-100 hover:bg-gray-200">GitHub Repo</button> : <button disabled onClick={() => window.open(repoURL)} className="my-[1rem] mr-[1rem] p-[1rem] rounded-xl bg-gray-100 hover:bg-gray-200 border-1">Source Code Unavailable</button>}
      </div>
      {/* <button onClick={repoURL} className="my-[1rem] mr-[1rem] p-[1rem] rounded-xl bg-yellow-400 hover:bg-yellow-300">Source Code</button>
      <button disabled className="hidden my-[1rem] p-[1rem] rounded-xl bg-yellow-400 text-black">Live Demo</button> */}
    </div>
  );
};

export default WorkCard;

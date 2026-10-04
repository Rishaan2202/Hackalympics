'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import '@/app/globals.css'

export default function ExplorePage({projects}) {

  const [projectsArray, setProjectArray] = useState(projects);

  const handleSearch = (text) => {
    const searchText = text.toLowerCase();
    const filteredProjects = projects.filter((user) => {
      const projectName = user.name?.toLowerCase() || "";
      const projectUser = user.username?.toLowerCase() || "";  
      return projectName.includes(searchText) || projectUser.includes(searchText);
    });
    setProjectArray(filteredProjects);
  }

  return (
    <div className="absolute left-50 top-20">
      <h1 className='font-bold text-3xl'>Explore</h1>
      <p>Welcome to the explore page!</p>
      <input type="text" placeholder="Search for projects..." className="border-2 bg-[var(--blue)] border-black rounded p-2 mt-4 mb-4 w-full" onChange={(e) => {handleSearch(e.target.value)}} />
      <ul className="text-[var(--blue)] grid grid-cols-3 h-full">
        {projectsArray.map((user, index) => (
          <li key={index} className="flex flex-col break-words bg-[var(--black)] m-2 p-2 rounded w-[25vw]">
            <Image src={user.screenshot || "https://cdn.hackclub.com/01a09f57-fcc4-78d8-b720-d09a3e79effa/No_Image_Available.jpg"} alt="Project Screenshot" width={400} height={200} className="rounded mb-2" />
            <h2 className="font-bold text-2xl text-[var(--red)] mb-2 flex justify-center">{user.name || "Project Name"}</h2> 
            <p>{user.description || "Project Description"}</p>
            <div className='flex justify-around mt-auto'>
              <button className="bg-[var(--yellow)] hover:bg-[var(--yellow)] hover:cursor-pointer hover:scale-[1.1] m-2 text-black font-bold py-2 px-4 rounded w-[45%]"><a href={user.demo || "#"} target="_blank" rel="noopener noreferrer">Demo</a></button>
              <button className="bg-[var(--yellow)] hover:bg-[var(--yellow)] hover:cursor-pointer hover:scale-[1.1] m-2 text-black font-bold py-2 px-4 rounded w-[45%] "><a href={user.code || "#"} target="_blank" rel="noopener noreferrer">Code</a></button> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

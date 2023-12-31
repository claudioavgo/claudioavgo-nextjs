'use client'

import { useEffect, useState } from 'react';

export default function Home() {

  const [projectData, setProjectData] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const username = 'claudioavgo';
      const url = `https://api.github.com/users/${username}/repos`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        
        data.sort((a, b) => b.stargazers_count - a.stargazers_count);

        console.info(data)

        setProjectData(data.slice(0, 5));
      } catch (error) {
        console.error(`Erro ao recuperar repositórios de ${username} na API do GitHub:`, error);
      }
    };

    fetchProjects();
  }, []);
  
  return (
    <main className="flex justify-center items-center h-screen bg-neutral-900">
      <div className='space-y-5'>
        <div className='text-left'>
          <h1 className='text-2xl'>Hello, my name is <span className='font-semibold bg-pink-500 rounded px-1 text-pink-900'>Cláudio Alves</span>.</h1>
          <h1 className='text-xl text-gray-300'>I'm working with Back-End development.</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-2xl'># My stacks</h1>
          <h1>- Python/Flask/Django 2y</h1>
          <h1>- JavaScript/React 1y</h1>
          <h1>- Java 6m</h1>
          <h1>- C 6m</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-2xl'># My experience</h1>
          <h1>- UNISÃOMIGUEL 1y (Now)</h1>
          <h1>- Freelance 1.5y</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-2xl'># My projects</h1>
          {projectData?.map((project) => (
            <a href={`https://github.com/claudioavgo/${project?.name}`} key={project?.id} target="_blank" rel="noopener noreferrer">
              <h1>- {project.name}/{project.description?.slice(0, 30) + "..."}</h1>
            </a>
          ))}
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-2xl'># My contacts</h1>
          <h1>- Mail: <a href='mailto:hi@claudioav.com>'>hi@claudioav.com</a></h1>
          <h1>- Discord: <a href='discord:claudioav'>@claudioav</a></h1>
          <h1>- Phone: <a href='tel:+5581999416600'>+55 81 999416600</a></h1>
        </div>

        {/* <div className='text-lg font-mono text-left'>
          <h1 className='text-2xl'># Posts</h1>
          <h1>- Como criar um banco de dados na azure</h1>
        </div> */}
      </div>
    </main>
  )
}

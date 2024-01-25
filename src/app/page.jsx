'use client'

import { useEffect, useState } from 'react';
import TabBar from '@/components/TabBar';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 1000; // 1 segundo em milissegundos

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Limpar o timeout se o componente for desmontado antes do atraso de 1 segundo
    return () => clearTimeout(timeoutId);
  }, []);
  
  if (loading)
    return (
      <main className="flex justify-center items-center h-screen ">
        <svg className="girando" width="220" height="224" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2zM8 7V5h2v2zM6 9V7h2v2zm-2 2V9h2v2zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6zm2-2v2h-2v-2zm2-2v2h-2v-2zm0 0h2v-2h-2z"/>
        </svg>
      </main>
    )

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <div className='px-5 space-y-5'>

      <TabBar/>

      <div className='space-y-5'>
        <div className='text-left'>
          <h1 className='text-xl'>Hello, my name is <span className='font-semibold bg-pink-500 rounded px-1 text-pink-900'>Cláudio Alves</span>.</h1>
          <h1 className='text-lg text-gray-300'>I'm working with Back-End development.</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-xl'># My stacks</h1>
          <h1>- Python/Flask/Django 2y</h1>
          <h1>- JavaScript/React 1y</h1>
          <h1>- Java 6m</h1>
          <h1>- C 6m</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-xl'># My experience</h1>
          <h1>- UNISÃOMIGUEL 1y (Now)</h1>
          <h1>- Freelance 1.5y</h1>
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-xl'># My projects</h1>
          {projectData?.map((project) => (
            <a href={`https://github.com/claudioavgo/${project?.name}`} key={project?.id} target="_blank" rel="noopener noreferrer">
              <h1>- {project.name}/{project.description?.slice(0, 30) + "..."}</h1>
            </a>
          ))}
        </div>

        <div className='text-lg font-mono text-left'>
          <h1 className='text-xl'># My contacts</h1>
          <h1>- Mail: <a href='mailto:hi@claudioav.com>'>hi@claudioav.com</a></h1>
          <h1>- Discord: <a href='discord:claudioav'>@claudioav</a></h1>
          <h1>- Phone: <a href='tel:+5581999416600'>+55 81 999416600</a></h1>
        </div>
      </div>
      </div>

      
    </main>
  )
}
import React from 'react';
import './Work.css'
import projectsArr from '../../data.js'
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const Work = () => {

    const projects = projectsArr.map((el, index) => {
        return (
            <ProjectCard name={el.name} description={el.description} image={el.image} site={el.site} github={el.github} key={index} />
        )
    })

    return (
        <>
            <h1>WORK PAGE</h1>
            <section className="cards">
                {projects}
            </section>
        </>
        
    );
}
 
export default Work;
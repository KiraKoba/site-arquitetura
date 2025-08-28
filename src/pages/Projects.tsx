import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    description: 'A beautiful modern villa with stunning views.',
    image: 'path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Urban Office',
    description: 'A sleek office building in the heart of the city.',
    image: 'path/to/image2.jpg',
  },
  {
    id: 3,
    title: 'Eco-Friendly House',
    description: 'A sustainable house designed with eco-friendly materials.',
    image: 'path/to/image3.jpg',
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
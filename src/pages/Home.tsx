import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: 'Modern House',
      description: 'A beautiful modern house with sustainable features.',
      image: 'path/to/image1.jpg',
    },
    {
      title: 'Office Building',
      description: 'A sleek office building designed for productivity.',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'Urban Park',
      description: 'A revitalized urban park for community engagement.',
      image: 'path/to/image3.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Architecture Company</h1>
        <p>We create innovative and sustainable designs for modern living.</p>
        <h2>Featured Projects</h2>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
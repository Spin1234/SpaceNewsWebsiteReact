import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Set page title and meta description dynamically
    document.title = "About Us | Space News";
    
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn more about Space News, your trusted source for space missions, astronomy, and cosmic discoveries.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Learn more about Space News, your trusted source for space missions, astronomy, and cosmic discoveries.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="container mt-4">
      <h1>About Space News</h1>
      <p>
        Welcome to <strong>Space News</strong>, your trusted source for the latest discoveries, missions,
        and insights from the universe. We are passionate about delivering accurate, exciting space-related content —
        from NASA launches and space tech to black holes and Mars missions.
      </p>

      <h2>🚀 What We Cover</h2>
      <ul>
        <li>Space agency updates (NASA, ISRO, ESA, etc.)</li>
        <li>Earth observation and satellites</li>
        <li>Moon and Mars exploration</li>
        <li>Cosmic events and astronomy</li>
        <li>Space science, technology, and innovations</li>
      </ul>

      <h2>🌟 Our Mission</h2>
      <p>
        We aim to make space knowledge <strong>accessible, exciting, and relevant</strong> to everyone — students,
        researchers, hobbyists, and space lovers across the world.
      </p>

      <h2>🧑‍🚀 Join Us</h2>
      <p>
        Whether you’re a lifelong space nerd or just starting your cosmic journey,
        <strong> Space News</strong> is your launchpad to the stars. Let’s explore the universe — one story at a time.
      </p>
    </div>
  );
};

export default About;

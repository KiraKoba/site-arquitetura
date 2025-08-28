import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Architecture Company. All rights reserved.</p>
      </div>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
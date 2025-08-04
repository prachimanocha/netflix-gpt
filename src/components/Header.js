import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-6 py-4">
      <img
        className="w-36 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    </header>
  );
};

export default Header;

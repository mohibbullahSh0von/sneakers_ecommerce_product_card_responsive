import React from 'react';

function Footer() {
  return (
    <div>
      <p className="bg-gray-300 text-center text-sm text-gray-500 capitalize">
        &copy; All rights reserved{' '}
        <span className="company-name uppercase">
          sneakers {new Date().getFullYear()}
        </span>
      </p>
      <p className="text-theme-dark-grayish-blue text-center text-sm">
        created by <span className="author tracking-widest">shovon</span> with
        ❤️
      </p>
    </div>
  );
}

export default Footer;

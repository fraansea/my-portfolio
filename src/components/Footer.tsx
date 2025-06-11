import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center">
      <p className="text-[rgba(90,90,90,1)] text-base font-normal leading-none tracking-[0.16px] text-center mt-28 max-md:mt-10">
        Copyright © 2025 Francis Gigi. All rights reserved.
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/7bf5fdbcee3870430cc7a7cb9fd2faf8e30f1997?placeholderIfAbsent=true"
        alt="Footer logo"
        className="aspect-[6.99] object-contain w-[140px] max-w-full mt-8"
      />
    </footer>
  );
};

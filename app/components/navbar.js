'use client'
import React, { useState, useEffect } from 'react';

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled below the top
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`${isScrolled ? 'pt-4' : ' mt-0'} fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ease-in-out`}>
      <nav
        className={`flex ${
          isScrolled ? 'bg-white/10 backdrop-blur' : ' mt-0'
        } rounded-full font-[family-name:var(--font-geist-sans)] items-center w-full mx-auto max-w-7xl justify-between p-4 text-green-400  transition-all duration-300 ease-in-out`}
      >      {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 text-sm font-bold text-black bg-[#39FF14] rounded-full md:text-lg">
            WB
          </div>
          {/* <span className="text-lg text-[#39FF14] font-extrabold tracking-wide md:text-xl">
            Walter Black
          </span> */}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 md:space-x-4">
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1.5 md:p-2 text-sm transition border-2 border-white rounded-full w-7 h-7 md:w-10 md:h-10 md:text-base hover:text-green-200"
          >
            <svg className="w-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="#ffffff"/>
              </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1.5 md:p-2 text-sm transition border-2 border-white rounded-full w-7 h-7 md:w-10 md:h-10 md:text-base hover:text-green-200"
          >
            <svg className="w-full" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
              </svg>
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1.5 md:p-2 text-sm transition border-2 border-white rounded-full w-7 h-7 md:w-10 md:h-10 md:text-base hover:text-green-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="#fff" fillRule="evenodd" viewBox="0 0 252 300" focusable="false"><path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path><path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path></svg>
          </a>
          {/* Call-to-Action Button */}
          <a
            href="https://your-buy-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm font-bold text-black transition duration-100 bg-[#39FF14] rounded-full md:text-base md:px-4 md:py-2 hover:bg-[#37ff14b6]"
          >
            Buy Walter Black
          </a>
        </div>
      </nav>
    </div>
  );
}

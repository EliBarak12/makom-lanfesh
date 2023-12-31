import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Website</h1>
          {/* Add any navigation or other header content here */}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to our Website</h2>
            <div className="w-full md:w-2/3 mx-auto">
              {/* Replace 'your-image.jpg' with the path to your image */}
              <img
                src="your-image.jpg"
                alt="Your Image"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </section>
          {/* Add more sections or content here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          {/* Add footer content or links */}
          <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

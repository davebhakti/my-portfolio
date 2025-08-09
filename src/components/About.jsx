import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="bg-gray-200 h-64 w-64 mx-auto rounded-full"></div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              I'm a full-stack developer with 3+ years of experience building web applications.
            </p>
            <p className="text-lg">
              My passion lies in creating intuitive user experiences with clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
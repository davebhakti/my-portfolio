import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-indigo-600">Your Name</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A passionate developer specializing in modern web technologies
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          View My Work
        </button>
      </div>
    </section>
  );
}
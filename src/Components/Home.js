import React from "react";
import image from "../186462.jpg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Red galaxy" 
        className="absolute object-cover w-full h-full" 
      />
      <section 
        className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
        className="text-6xl font-bold karla leading-none lg:leading-snug home-name"
        >Hello I'm Stefan!</h1>
      </section>
    </main>
  )
};
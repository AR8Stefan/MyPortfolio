import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header style={{backgroundColor: `#231429`}}>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-300 karla text-offwhite text-red-hover text-4xl font-bold tracking-widest">
              Stefan
          </NavLink>
          <NavLink 
            to="/project" 
            activeClassName="text-white"
            style={{backgroundColor: `#231429`}} 
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-300 karla text-offwhite text-red-hover font-bold tracking-widest">
              Projects
          </NavLink>
          <NavLink 
            to="/about" 
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-300 karla text-offwhite text-red-hover font-bold tracking-widest">
              About Me!
          </NavLink>
          <NavLink 
            to="/post" 
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-300 karla text-offwhite text-red-hover font-bold tracking-widest">
              Posts
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon 
          url="https://www.linkedin.com/in/stefan-piatkov/" className="mr-4" 
          target="_blank" 
          fgColor="fff" 
          style={{height: 35, width: 35}} />

          <SocialIcon url="https://github.com/AR8Stefan" className="mr-4" target="_blank" fgColor="fff" style={{height: 35, width: 35}} />

          <SocialIcon url="https://open.spotify.com/playlist/37i9dQZEVXcMM5dgEfOqoi" className="mr-4" target="_blank" fgColor="fff" style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  )
};
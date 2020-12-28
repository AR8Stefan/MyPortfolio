import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="almost-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact 
            activeClassName="darkpurple-bg"
            className="inline-flex items-center py-4 px-3 mr-4 karla rounded text-offwhite text-red-hover text-3xl font-bold tracking-widest">
              Stefan
          </NavLink>
          <NavLink 
            to="/project" 
            activeClassName="darkpurple-bg" 
            className="inline-flex items-center py-2 px-3 my-4 rounded karla text-offwhite text-red-hover font-bold tracking-widest">
              Projects
          </NavLink>
          <NavLink 
            to="/about" 
            activeClassName="darkpurple-bg"
            className="inline-flex items-center py-2 px-3 my-4 rounded karla text-offwhite text-red-hover font-bold tracking-widest">
              About Me!
          </NavLink>
          {/* <NavLink 
            to="/post" 
            activeClassName="darkpurple-bg"
            className="inline-flex items-center py-3 px-3 my-6 rounded karla text-offwhite text-red-hover font-bold tracking-widest">
              Blog | Posts
          </NavLink> */}
        </nav>
        <div className="inline-flex py-3 px-3 my-2">
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
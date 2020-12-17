import 
  React, 
  { useState, 
    useEffect} 
from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  
  return (
    <main className="burgundy-bg min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="karla text-2xl flex justify-center text-offwhite">My Blog Posts</h1>
        <h2 className="karla text-lg flex justify-center text-offwhite mb-12">Welcome to my page of posts.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index) => (
          <article>
            <Link to={"/post/" + post.slug.curent} key={post.slug.curent}>
            <span 
              className="block h-64 relative rounded shadow leading-snug bg-white b-l-8 b-black" 
              key={index}>
              <img 
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className="w-full h-full rounded-r object-cover relative"/>
              <span className="block relative flex justify-end items-end pr-4 pb-4">
                <h3 className="text-offwhite text-lg font-bold px-3 py-4 darkpurple-bg rounded karla">{post.title}</h3>
              </span>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>
  )
};
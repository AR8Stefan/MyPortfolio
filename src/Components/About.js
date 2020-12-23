import React, { useEffect, useState } from 'react';
import spacecloud from '../spacecloud.jpg';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

useEffect(() => {
  sanityClient
    .fetch(
      `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
    }`
    )
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
}, []);

if (!author) return <div>Oh No! Something has gone wrong.. Please go back.</div>;

  return (
    <main className="relative">
      <img src={spacecloud} alt="Blue cloud in space" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="burgundy-bg rounded-lg lg:flex p-20">
          <img 
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-72 lg-64 mr-8" alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="karla text-6xl text-offwhite mb-4">
              Hello there. I'm{" "}
              <span className="text-offwhite">{author.name}</span>
            </h1>
            <div className="text-offwhite prose lg:prose-xl max-w-full">
            <p className="text-lg">{author.bio}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
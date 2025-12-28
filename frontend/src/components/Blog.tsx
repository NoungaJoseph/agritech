
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Actualités Agricoles</h1>
        <p className="text-xl text-gray-500">Conseils d'experts et tendances du marché camerounais.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="group cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              <div className="absolute top-4 left-4 bg-green-700 text-white px-4 py-1 rounded-full text-xs font-black uppercase">{post.date}</div>
            </div>
            <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-green-700 transition-colors">{post.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 border-t pt-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-black text-xs">{post.author[0]}</div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-400">Par {post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

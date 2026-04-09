import React from 'react';
import { Link } from 'react-router-dom';
import { RiCalendarLine, RiTimeLine, RiMessage3Line } from '@remixicon/react';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/blogs/${blog.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={blog.featureImage}
            alt={blog.title}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-violet-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {blog.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1.5">
            <RiCalendarLine className="w-4 h-4" />
            <span>{formatDate(blog.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiTimeLine className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
          {blog.comments && blog.comments.length > 0 && (
            <div className="flex items-center gap-1.5">
              <RiMessage3Line className="w-4 h-4" />
              <span>{blog.comments.length}</span>
            </div>
          )}
        </div>
        
        <Link to={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              {blog.author.name}
            </span>
          </div>
          
          <Link
            to={`/blogs/${blog.slug}`}
            className="text-violet-600 text-sm font-medium hover:text-violet-700 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default React.memo(BlogCard);

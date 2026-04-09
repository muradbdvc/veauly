import React from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiCalendarLine } from '@remixicon/react';
import { blogCategories, popularTags, getRecentBlogs } from '../../data/blogData';

const BlogSidebar = ({ selectedCategory, onCategoryChange }) => {
  const recentBlogs = getRecentBlogs(4);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
          />
          <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategoryChange && onCategoryChange(null)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                selectedCategory === null
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="flex justify-between items-center">
                <span>All Categories</span>
                <span className="text-xs opacity-70">
                  {blogCategories.reduce((acc, cat) => acc + cat.count, 0)}
                </span>
              </span>
            </button>
          </li>
          {blogCategories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryChange && onCategoryChange(category.name)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                  selectedCategory === category.name
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.slug}`}
              className="flex gap-4 group"
            >
              <img
                src={blog.featureImage}
                alt={blog.title}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2 mb-1">
                  {blog.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <RiCalendarLine className="w-3.5 h-3.5" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-50 hover:bg-violet-50 text-gray-600 hover:text-violet-600 text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-violet-600 to-violet-dark rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
        <p className="text-sm text-violet-100 mb-4">
          Subscribe to get the latest beauty tips and trends.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-violet-200 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
        />
        <button className="w-full bg-white text-violet-600 font-medium py-3 rounded-xl hover:bg-violet-50 transition-colors">
          Subscribe
        </button>
      </div>
    </aside>
  );
};

export default React.memo(BlogSidebar);

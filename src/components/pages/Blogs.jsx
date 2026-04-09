import React, { useState, useMemo } from 'react';
import BlogCard from '../blog/BlogCard';
import BlogSidebar from '../blog/BlogSidebar';
import { blogsData } from '../../data/blogData';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  const filteredBlogs = useMemo(() => {
    let filtered = [...blogsData];

    if (selectedCategory) {
      filtered = filtered.filter(
        (blog) => blog.category === selectedCategory
      );
    }

    switch (sortBy) {
      case 'oldest':
        filtered.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case 'a-z':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        filtered.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-violet-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beauty Blog
          </h1>
          <p className="text-violet-100 text-lg max-w-2xl mx-auto">
            Discover the latest beauty tips, skincare routines, and makeup trends
            to enhance your natural beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <p className="text-gray-600">
                Showing {filteredBlogs.length} article
                {filteredBlogs.length !== 1 ? 's' : ''}
                {selectedCategory && (
                  <span className="text-violet-600">
                    {' '}
                    in {selectedCategory}
                  </span>
                )}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>

            {filteredBlogs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl">
                <p className="text-gray-500 text-lg">
                  No articles found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 text-violet-600 font-medium hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <BlogSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Blogs);

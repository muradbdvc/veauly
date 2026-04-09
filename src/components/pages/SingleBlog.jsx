import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  RiCalendarLine,
  RiTimeLine,
  RiHeartLine,
  RiShareLine,
  RiArrowLeftLine,
  RiFacebookBoxFill,
  RiTwitterXFill,
  RiLinkedinBoxFill,
} from '@remixicon/react';
import BlogSidebar from '../blog/BlogSidebar';
import BlogCard from '../blog/BlogCard';
import CommentSection from '../blog/CommentSection';
import { getBlogBySlug, getRelatedBlogs } from '../../data/blogData';

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const relatedBlogs = getRelatedBlogs(slug, blog.category, 3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog.title;

    switch (platform) {
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          '_blank'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
          '_blank'
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-violet-dark py-20">
        <div className="container mx-auto px-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <RiArrowLeftLine className="w-5 h-5" />
            Back to Blog
          </Link>
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
              <img
                src={blog.featureImage}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {blog.author.name}
                      </p>
                      <p className="text-sm text-gray-500">Author</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-500">
                    <RiCalendarLine className="w-4 h-4" />
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-500">
                    <RiTimeLine className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-violet-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-8 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-50 text-gray-600 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors">
                      <RiHeartLine className="w-5 h-5" />
                      <span className="text-sm">Like</span>
                    </button>

                    <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
                      <span className="text-sm text-gray-500">Share:</span>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <RiFacebookBoxFill className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <RiTwitterXFill className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <RiLinkedinBoxFill className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CommentSection comments={blog.comments} blogSlug={slug} />

            {relatedBlogs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="lg:w-1/3">
            <div className="sticky top-8">
              <BlogSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleBlog);

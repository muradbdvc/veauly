import React, { useState } from 'react';
import { RiHeartLine, RiHeartFill, RiReplyLine } from '@remixicon/react';

const CommentSection = ({ comments = [], blogSlug }) => {
  const [newComment, setNewComment] = useState('');
  const [commentsList, setCommentsList] = useState(comments);
  const [likedComments, setLikedComments] = useState({});

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'Guest User',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80',
      content: newComment,
      createdAt: new Date().toISOString().split('T')[0],
      likes: 0,
    };

    setCommentsList([comment, ...commentsList]);
    setNewComment('');
  };

  const handleLike = (commentId) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
    setCommentsList((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: likedComments[commentId]
                ? comment.likes - 1
                : comment.likes + 1,
            }
          : comment
      )
    );
  };

  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Comments ({commentsList.length})
      </h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          rows={4}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none transition-all"
        />
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newComment.trim()}
          >
            Post Comment
          </button>
        </div>
      </form>

      {commentsList.length > 0 ? (
        <div className="space-y-6">
          {commentsList.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {comment.content}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 ml-2">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-1.5 text-sm transition-colors ${
                      likedComments[comment.id]
                        ? 'text-rose-500'
                        : 'text-gray-500 hover:text-rose-500'
                    }`}
                  >
                    {likedComments[comment.id] ? (
                      <RiHeartFill className="w-4 h-4" />
                    ) : (
                      <RiHeartLine className="w-4 h-4" />
                    )}
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-600 transition-colors">
                    <RiReplyLine className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      )}
    </section>
  );
};

export default React.memo(CommentSection);

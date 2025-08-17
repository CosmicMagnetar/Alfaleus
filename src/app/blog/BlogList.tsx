// app/blogs/BlogList.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

type Blog = {
  id: string;
  title: string;
  slug: string;
  author: string;
  tags: string[];
  body: string;
  cover_image: string;
  published: boolean;
  created_at: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);

  // Animate blogs appearing on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleBlogs(blogs);
    }, 100);
    return () => clearTimeout(timer);
  }, [blogs]);

  // Handle modal open/close with smooth animations
  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    // Delay clearing selectedBlog to allow exit animation
    setTimeout(() => {
      setSelectedBlog(null);
    }, 300);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (body: string) => {
    const wordsPerMinute = 200;
    const words = body.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (!blogs || blogs.length === 0) {
    return (
      <main className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Latest Blogs</h1>
          <p className={styles.blogSubtitle}>
            Discover insights about eye care and vision technology
          </p>
        </div>
        <div className={styles.errorMessage}>
          No blogs available at the moment. Check back soon!
        </div>
      </main>
    );
  }

  return (
    <main className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Latest Blogs</h1>
        <p className={styles.blogSubtitle}>
          Discover insights about eye care and vision technology
        </p>
      </div>

      <div className={styles.blogGrid}>
        {visibleBlogs.map((blog, index) => (
          <article
            key={blog.id}
            className={styles.blogCard}
            onClick={() => openModal(blog)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(blog);
              }
            }}
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'blogCardAppear 0.6s ease-out forwards'
            }}
          >
            <div className={styles.blogImageContainer}>
              {blog.cover_image ? (
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className={styles.blogImage}
                  loading="lazy"
                />
              ) : (
                <div className={styles.blogImagePlaceholder}>
                  <span>No Image Available</span>
                </div>
              )}
            </div>

            <div className={styles.blogContent}>
              <h2 className={styles.blogCardTitle}>{blog.title}</h2>

              <div className={styles.blogMeta}>
                <span className={styles.blogAuthor}>By {blog.author}</span>
                <span className={styles.blogDate}>
                  {formatDate(blog.created_at)}
                </span>
              </div>

              {/* Reading time indicator */}
              <div className={styles.blogReadingTime}>
                {getReadingTime(blog.body)}
              </div>

              {blog.tags?.length > 0 && (
                <div className={styles.blogTags}>
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.blogTag}>
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className={styles.blogTag}>
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Enhanced Modal */}
      {selectedBlog && isModalOpen && (
        <div 
          className={styles.modalOverlay} 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.modalCloseButton} 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              {selectedBlog.cover_image && (
                <img
                  src={selectedBlog.cover_image}
                  alt={selectedBlog.title}
                  className={styles.modalImage}
                  loading="lazy"
                />
              )}

              <h1 id="modal-title" className={styles.modalTitle}>
                {selectedBlog.title}
              </h1>

              <div className={styles.modalMeta}>
                <span className={styles.modalAuthor}>
                  By {selectedBlog.author}
                </span>
                <span className={styles.modalDate}>
                  {formatDate(selectedBlog.created_at)}
                </span>
                <span className={styles.modalReadingTime}>
                  {getReadingTime(selectedBlog.body)}
                </span>
              </div>

              {selectedBlog.tags?.length > 0 && (
                <div className={styles.modalTags}>
                  {selectedBlog.tags.map((tag) => (
                    <span key={tag} className={styles.modalTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.modalBody}>
              <div
                dangerouslySetInnerHTML={{ __html: selectedBlog.body }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blogCardAppear {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
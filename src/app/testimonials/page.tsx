import React from "react";
import styles from "./Section.module.css";

interface Review {
  name: string;
  role: string;
  company: string;
  title: string;
  text: string;
  image?: string;
  avatar: string;
  date: string;
  tag: string;
}

const reviews: Review[] = [
  {
    name: "Kristle Jenson",
    role: "CFO",
    company: "Company",
    title: "Design Made Easy",
    text: "I've tried many platforms, but this stands out for its attention to detail and clean aesthetics. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "21.05.2025",
    tag: "DX",
  },
  {
    name: "Harry Maguire",
    role: "CEO",
    company: "Company",
    title: "Top-Notch Quality",
    text: "Alfaleus is revolutionizing eye care with cutting-edge vision diagnostics that are accurate, portable, and patient-friendly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    image: "https://www.garneteducation.com/app/uploads/5-tips-business-studies.jpg",
    date: "21.05.2025",
    tag: "DX",
  },
  {
    name: "John Walker",
    role: "UX Designer",
    company: "Company",
    title: "Freelancer's Ally",
    text: "Alfaleus brings eye diagnostics into the future — smart, portable, and incredibly precise.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "21.05.2025",
    tag: "DX",
  },
  {
    name: "Kristle Jenson",
    role: "CMO",
    company: "Company",
    title: "Quick Portfolio Fix",
    text: "Alfaleus has redefined convenience in visual diagnostics without compromising accuracy.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    date: "21.05.2025",
    tag: "DX",
  },
  {
    name: "Ashley Cook",
    role: "Head HR",
    company: "Company",
    title: "Stunning Templates",
    text: "Finally, eye care tech that's as intuitive as it is impactful — thanks to Alfaleus.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    date: "21.05.2025",
    tag: "DX",
  },
  {
    name: "Kristle Jenson",
    role: "Analyst",
    company: "Company",
    title: "Website Success",
    text: "Their devices are compact, intelligent, and truly designed for the future of eye care.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=200&fit=crop",
    date: "21.05.2025",
    tag: "DX",
  },
];

const ClientVoices: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>Honest Reviews</span>
        <h2 className={styles.title}>Client Voices</h2>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <h3 className={styles.name}>{review.name}</h3>
                  <p className={styles.company}>{review.company}</p>
                </div>
                <span className={styles.role}>{review.role}</span>
              </div>

              {/* Title */}
              <h4 className={styles.reviewTitle}>{review.title}</h4>

              {/* Text */}
              <p className={styles.reviewText}>{review.text}</p>

              {/* Optional Image */}
              {review.image && (
                <img
                  src={review.image}
                  alt={review.title}
                  className={styles.reviewImage}
                />
              )}

              {/* Footer */}
              <div className={styles.cardFooter}>
                <span className={styles.tag}>{review.tag}</span>
                <span className={styles.date}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVoices;

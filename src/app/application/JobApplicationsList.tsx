"use client";

import { useState } from "react";
import styles from "./page.module.css";

type JobApplication = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  experience_years: number;
  resume_url: string;
  linkedin_url: string;
  portfolio_url: string;
  cover_letter: string;
  expected_salary: string;
  relocation_willing: boolean;
  position: string;
  created_at: string;
};

export default function JobApplicationsList({
  applications,
}: {
  applications: JobApplication[];
}) {
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

  const openModal = (app: JobApplication) => {
    setSelectedApplication(app);
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };

  return (
    <main className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Job Applications</h1>
        <p className={styles.blogSubtitle}>
          Review applications submitted for your open positions
        </p>
      </div>

      <div className={styles.blogGrid}>
        {applications.map((app) => (
          <article
            key={app.id}
            className={styles.blogCard}
            onClick={() => openModal(app)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.blogContent}>
              <h2 className={styles.blogCardTitle}>{app.full_name}</h2>

              <div className={styles.blogMeta}>
                <span className={styles.blogAuthor}>📧 {app.email}</span>
                <span className={styles.blogDate}>
                  {new Date(app.created_at).toLocaleDateString()}
                </span>
              </div>

              <p><strong>Position:</strong> {app.position}</p>
              <p><strong>Experience:</strong> {app.experience_years} years</p>
              <p><strong>Relocation:</strong> {app.relocation_willing ? "Yes" : "No"}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedApplication && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseButton} onClick={closeModal}>
              ×
            </button>

            <div className={styles.modalHeader}>
              <h1 className={styles.modalTitle}>{selectedApplication.full_name}</h1>

              <div className={styles.modalMeta}>
                <span className={styles.modalAuthor}>📧 {selectedApplication.email}</span>
                <span className={styles.modalDate}>
                  {new Date(selectedApplication.created_at).toLocaleDateString()}
                </span>
              </div>

              <p><strong>Phone:</strong> {selectedApplication.phone}</p>
              <p><strong>Position:</strong> {selectedApplication.position}</p>
              <p><strong>Experience:</strong> {selectedApplication.experience_years} years</p>
              <p><strong>Expected Salary:</strong> {selectedApplication.expected_salary}</p>
              <p><strong>Relocation Willing:</strong> {selectedApplication.relocation_willing ? "Yes" : "No"}</p>

              <div className={styles.modalTags}>
                <a href={selectedApplication.resume_url} target="_blank" rel="noopener noreferrer">📄 Resume</a><br />
                <a href={selectedApplication.linkedin_url} target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a><br />
                <a href={selectedApplication.portfolio_url} target="_blank" rel="noopener noreferrer">🌐 Portfolio</a>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h2>Cover Letter</h2>
              <p>{selectedApplication.cover_letter || "No cover letter provided."}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

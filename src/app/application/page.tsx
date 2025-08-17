"use client";

import { useState } from "react";
import { supabase } from "../../../lib/superbaseClient";
import styles from "./page.module.css";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    experience_years: 0,
    resume_url: "",
    linkedin_url: "",
    portfolio_url: "",
    cover_letter: "",
    expected_salary: "",
    relocation_willing: false,
    position: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("job_applications").insert([formData]);

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        experience_years: 0,
        resume_url: "",
        linkedin_url: "",
        portfolio_url: "",
        cover_letter: "",
        expected_salary: "",
        relocation_willing: false,
        position: "",
      });
    }

    setLoading(false);
  };

  return (
    <main className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Apply for a Job</h1>

      <form onSubmit={handleSubmit} className={styles.blogCard} style={{ maxWidth: 600, margin: "0 auto" }}>
        <input type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required className={styles.input}/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={styles.input} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={styles.input} required />
        <input className={styles.input} type="number" name="experience_years" placeholder="Years of Experience" value={formData.experience_years} onChange={handleChange} required />
        <input className={styles.input} type="url" name="resume_url" placeholder="Resume URL" value={formData.resume_url} onChange={handleChange} required />
        <input className={styles.input} type="url" name="linkedin_url" placeholder="LinkedIn URL" value={formData.linkedin_url} onChange={handleChange} />
        <input className={styles.input} type="url" name="portfolio_url" placeholder="Portfolio URL" value={formData.portfolio_url} onChange={handleChange} />
        <textarea className={styles.input} name="cover_letter" placeholder="Cover Letter" value={formData.cover_letter} onChange={handleChange} rows={4} />
        <input className={styles.input} type="text" name="expected_salary" placeholder="Expected Salary" value={formData.expected_salary} onChange={handleChange} />
        
        <label style={{ display: "block", marginTop: "1rem" }}>
          <input type="checkbox" name="relocation_willing" checked={formData.relocation_willing} onChange={handleChange} />
          &nbsp;<div className={styles.input}>Willing to Relocate?</div>
        </label>

        <input className={styles.input} type="text" name="position" placeholder="Position you're applying for" value={formData.position} onChange={handleChange} required />

        <button type="submit" disabled={loading} style={{ marginTop: "1rem" }}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>

        {submitted && <p style={{ color: "green", marginTop: "1rem" }}>Application submitted successfully!</p>}
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </main>
  );
}

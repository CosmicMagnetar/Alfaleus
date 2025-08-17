"use client";
import React from "react";
import Image from "next/image";
import {
  Heart,
  Eye,
  Download,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./ProductHighlight.css";

const ProductHighlight: React.FC = () => {
  return (
    <>
    <section className="product-highlight">
      {/* Left Side */}
      <div className="product-left">
        <div className="product-left-top">
        <h2>Intelligent Vision Analyzer Plus (iVA+)</h2>
        <p className="description">
          Virtual reality (VR) based Visual Field Perimeter, designed for Visual
          Field test. iVA+ is easy to carrxy and offers ease of use for both
          doctors and patients.
        </p>
        </div>

        <div className="details">
          <label className="dropdown-label">
            For more details
            <div className="dropdown-wrapper">
              <select className="dropdown">
                <option>Brochure</option>
              </select>
              <Download size={16} className="download-icon" />
            </div>
          </label>

          <button className="demo-button">Book a Demo</button>
        </div>
      </div>

      {/* Center Image */}
      <div className="product-center">
        <div className="image-card">
          <span className="featured-tag">Featured</span>
          <Image
            src="/iva-eye.png"
            alt="iva-eye"
            width={270}
            height={132}
            className="product-image"
          />
          {/* Arrow buttons overlay (optional) */}
          <div className="arrows">
            <ChevronLeft size={20} />
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      {/* Right Side Feature List */}
      <div className="product-right">
        <div className="feature">
          <h4>Fast and accurate with easy interpretation</h4>
          <p>
            iVA+ has real-time gaze tracking, thus ensuring minimal fixation
            loss and more accurate reporting.
          </p>
        </div>
        <div className="feature">
          <h4>Easy to operate with patient comfort</h4>
          <p>
            iVA+ has a simple smartphone interface for doctors and technicians,
            as well as an intuitive patient interface.
          </p>
        </div>
        <div className="feature">
          <h4>Telemedicine ready and space saving</h4>
          <p>
            Testing on iVA+ does not require a dedicated dark room. Tests can be
            conducted anywhere and it can fit easily on a shelf.
          </p>
        </div>
      </div>
    </section>

        {/* Reactions bar */}
        <div className="reactions product-highlight">
          <div className="reaction-item">
            <Eye size={18} /> <span>158</span>
          </div>
          <div className="reaction-item">
            <RotateCcw size={18} />
          </div>
          <div className="reaction-item">
            <Heart size={18} />
          </div>
        </div>
    </>
  );
};

export default ProductHighlight;

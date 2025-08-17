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

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  brochureLabel: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "gray";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  tag,
  brochureLabel,
  buttonLabel,
  buttonVariant = "primary",
}) => {
  return (
    <div className="product-card">
      {/* Left Content */}
      <div className="card-text">
        <h2>{title}</h2>
        <p className="desc">{description}</p>

        <label className="dropdown-label">
          For more details
          <div className="dropdown-wrapper">
            <select className="dropdown">
              <option>{brochureLabel}</option>
            </select>
            <Download size={16} className="download-icon" />
          </div>
        </label>

        <button className={`card-button ${buttonVariant}`}>
          {buttonLabel}
        </button>
      </div>

      {/* Image Block */}
      <div className="card-image-block">
        <div className="image-card">
          <span className="image-tag">{tag}</span>
          <Image
            src={image}
            alt={title}
            width={260}
            height={520}
            className="card-image"
          />
          <div className="arrows">
            <ChevronLeft size={20} />
            <ChevronRight size={20} />
          </div>
        </div>

        <div className="reactions">
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
      </div>
    </div>
  );
};

export default ProductCard;

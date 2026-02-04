export interface Amenity {
  icon: string;
  label: string;
}

export interface Room {
  id: string;
  title: string;
  description: string;
  size: string; // m²
  capacity: string;
  priceLevel: string; // $ to $$$
  images: string[]; // Changed from single image to array
  amenities: string[];
  comfortNote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Surrounding {
  title: string;
  description: string;
  distance: string;
  image: string;
}
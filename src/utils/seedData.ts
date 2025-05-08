import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { StudySpot } from '../types';

const studySpots: Omit<StudySpot, 'id'>[] = [
  {
    name: "LSA Building",
    location: "LSA",
    noiseLevel: "pretty loud",
    lighting: "good natural light",
    tags: ["social", "sunlight"]
  },
  {
    name: "Third Floor UGLi (Loud Side)",
    location: "UGLi - 3rd Floor",
    noiseLevel: "pretty loud",
    lighting: "horrible natural light",
    tags: ["group", "dim"]
  },
  {
    name: "Third Floor UGLi (Quiet Side)",
    location: "UGLi - 3rd Floor",
    noiseLevel: "pretty quiet",
    lighting: "horrible natural light",
    tags: ["quiet", "dim"]
  },
  {
    name: "Union Quiet Room",
    location: "Michigan Union",
    noiseLevel: "extremely quiet",
    lighting: "no natural light",
    tags: ["silent", "focused"]
  },
  {
    name: "Union IdeaHub",
    location: "Michigan Union",
    noiseLevel: "pretty loud",
    lighting: "a little natural light",
    tags: ["collaborative", "creative"]
  },
  {
    name: "Law Library",
    location: "Law Quad",
    noiseLevel: "silent",
    lighting: "natural light",
    tags: ["deep work", "sunlight", "silent"]
  },
  {
    name: "North Campus Duderstadt Center",
    location: "Duderstadt Center",
    noiseLevel: "mixed",
    lighting: "great natural light",
    tags: ["flexible", "spacious"]
  },
  {
    name: "Ross Winter Garden",
    location: "Ross School of Business",
    noiseLevel: "pretty loud",
    lighting: "bright natural light",
    tags: ["social", "modern", "sunlight"]
  },
  {
    name: "Taubman College Lobby",
    location: "Taubman College",
    noiseLevel: "low",
    lighting: "soft natural light",
    tags: ["design vibe", "cozy"]
  },
  {
    name: "Museums Study Room",
    location: "UM Museum",
    noiseLevel: "quiet",
    lighting: "low natural light",
    tags: ["quiet", "minimalist"]
  }
];

export const seedDatabase = async () => {
  try {
    const spotsCollection = collection(db, 'spots');
    
    for (const spot of studySpots) {
      await addDoc(spotsCollection, spot);
    }
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}; 
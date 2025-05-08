import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { StudySpot, GPTResponse } from '../types';
import { studySpots } from '../data/studySpots';

export default function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<GPTResponse | null>(null);
  const goal = searchParams.get('goal');

  useEffect(() => {
    const getRecommendation = async () => {
      try {
        // Simple recommendation logic based on focus goal
        let recommendedSpot: StudySpot;
        
        switch (goal) {
          case 'solo_deep_work':
            recommendedSpot = studySpots.find(spot => 
              spot.tags.includes('silent') || spot.noiseLevel === 'silent'
            ) || studySpots[0];
            break;
          case 'creative_thinking':
            recommendedSpot = studySpots.find(spot => 
              spot.tags.includes('creative') || spot.lighting.includes('natural')
            ) || studySpots[0];
            break;
          case 'group_collaboration':
            recommendedSpot = studySpots.find(spot => 
              spot.tags.includes('group') || spot.noiseLevel.includes('loud')
            ) || studySpots[0];
            break;
          default:
            recommendedSpot = studySpots[0];
        }

        const explanation = `This spot is perfect for ${goal?.replace('_', ' ')} because it has ${recommendedSpot.noiseLevel} noise level and ${recommendedSpot.lighting}.`;

        setResult({
          recommendedSpot,
          explanation
        });
      } catch (error) {
        console.error('Error getting recommendation:', error);
      } finally {
        setLoading(false);
      }
    };

    if (goal) {
      getRecommendation();
    } else {
      navigate('/');
    }
  }, [goal, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Finding your perfect study spot...</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Something went wrong. Please try again.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Perfect Study Spot
          </h1>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {result.recommendedSpot.name}
            </h2>
            <p className="text-gray-600">{result.recommendedSpot.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Noise Level</h3>
              <p className="mt-1">{result.recommendedSpot.noiseLevel}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Lighting</h3>
              <p className="mt-1">{result.recommendedSpot.lighting}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {result.recommendedSpot.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Why This Spot?</h3>
            <p className="text-gray-700">{result.explanation}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Another Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FocusGoal } from '../types';

const focusGoals = [
  {
    id: 'solo_deep_work',
    title: 'Solo Deep Work',
    description: 'Need complete silence for focused studying',
    icon: '🎯'
  },
  {
    id: 'creative_thinking',
    title: 'Creative Thinking',
    description: 'Looking for inspiration and creative energy',
    icon: '💡'
  },
  {
    id: 'group_collaboration',
    title: 'Group Collaboration',
    description: 'Working on projects with others',
    icon: '👥'
  },
  {
    id: 'casual_study',
    title: 'Casual Study',
    description: 'Comfortable spot for light reading or review',
    icon: '📚'
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<FocusGoal | null>(null);

  const handleGoalSelect = (goal: FocusGoal) => {
    setSelectedGoal(goal);
    navigate(`/result?goal=${goal}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Study Spot
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Select your focus goal and we'll find the ideal location for you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {focusGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => handleGoalSelect(goal.id as FocusGoal)}
              className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left border border-gray-200 hover:border-blue-500"
            >
              <div className="text-3xl mb-3">{goal.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {goal.title}
              </h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 
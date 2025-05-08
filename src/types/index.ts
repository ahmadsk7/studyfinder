export interface StudySpot {
  id?: string;
  name: string;
  location: string;
  noiseLevel: string;
  lighting: string;
  tags: string[];
  description?: string;
}

export type FocusGoal = 
  | 'solo_deep_work'
  | 'creative_thinking'
  | 'group_collaboration'
  | 'casual_study';

export interface GPTResponse {
  recommendedSpot: StudySpot;
  explanation: string;
} 
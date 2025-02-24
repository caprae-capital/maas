export interface PersonalityTraits {
  riskTolerance: number;
  innovationStyle: 'conservative' | 'moderate' | 'disruptive';
  decisionMaking: 'analytical' | 'intuitive' | 'collaborative';
  growthStrategy: 'organic' | 'acquisitive' | 'hybrid';
  managementStyle: 'hands-on' | 'delegative' | 'strategic';
  workCulture: string[];
  industryFocus: string[];
  dealBreakers: string[];
}

export const workCultureOptions = [
  'Results-Driven',
  'Innovative',
  'Collaborative',
  'Customer-Centric',
  'Data-Driven',
  'Agile',
  'Traditional',
  'Remote-First'
];

export const dealBreakerOptions = [
  'Poor Financial Records',
  'High Customer Churn',
  'Regulatory Issues',
  'Technical Debt',
  'Key Person Dependencies',
  'Market Saturation',
  'Limited Growth Potential',
  'Cultural Misalignment'
];
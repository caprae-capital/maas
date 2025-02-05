export interface CIMSection {
  id: string;
  title: string;
  description: string;
  insights: CIMInsight[];
}

export interface CIMInsight {
  id: string;
  content: string;
  category: 'market' | 'financial' | 'strategic' | 'operational';
}
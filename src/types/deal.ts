export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface Milestone {
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
}

export interface Deal {
  id: string;
  company: string;
  logo: string;
  stage: string;
  lastActivity: string;
  milestones: Milestone[];
  dueDate: string;
  dealSize: string;
  team: TeamMember[];
  status: string;
}
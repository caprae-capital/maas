import type { CIMSection } from './types';

export const cimSections: CIMSection[] = [
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    description: 'Key highlights and value proposition of your business',
    insights: [
      {
        id: 'es-1',
        content: 'Demonstrate market leadership with 47% YoY growth in enterprise customer segment, outpacing industry average by 3.2x',
        category: 'market'
      },
      {
        id: 'es-2',
        content: 'Highlight 92% gross margin sustainability through proprietary technology stack and automated operations',
        category: 'financial'
      },
      {
        id: 'es-3',
        content: 'Showcase 95% customer retention rate driven by AI-powered customer success program',
        category: 'strategic'
      },
      {
        id: 'es-4',
        content: 'Feature $2.8M ARR with 128% net revenue retention, indicating strong product-market fit',
        category: 'financial'
      }
    ]
  },
  {
    id: 'business-overview',
    title: 'Business Overview',
    description: 'Detailed description of your business operations and model',
    insights: [
      {
        id: 'bo-1',
        content: 'Emphasize 8 pending patents and proprietary ML algorithms delivering 3x efficiency gains',
        category: 'operational'
      },
      {
        id: 'bo-2',
        content: 'Highlight 73% reduction in customer onboarding time through automated workflow system',
        category: 'operational'
      },
      {
        id: 'bo-3',
        content: 'Showcase leadership team with combined 45+ years experience from top tech companies',
        category: 'strategic'
      },
      {
        id: 'bo-4',
        content: 'Detail 99.99% platform uptime and SOC 2 Type II compliance for enterprise security',
        category: 'operational'
      }
    ]
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Industry trends, market size, and growth opportunities',
    insights: [
      {
        id: 'ma-1',
        content: 'Target TAM of $18.7B growing at 24% CAGR through 2026 driven by digital transformation',
        category: 'market'
      },
      {
        id: 'ma-2',
        content: 'Identify 42% of enterprises planning to increase budget allocation in next 12 months',
        category: 'market'
      },
      {
        id: 'ma-3',
        content: 'Highlight first-mover advantage in emerging $5.3B market segment with limited competition',
        category: 'market'
      },
      {
        id: 'ma-4',
        content: 'Demonstrate 15% market share in enterprise segment with path to 35% within 24 months',
        category: 'market'
      }
    ]
  },
  {
    id: 'financial-performance',
    title: 'Financial Performance',
    description: 'Historical financials and future projections',
    insights: [
      {
        id: 'fp-1',
        content: 'Showcase 215% revenue CAGR over past 3 years with path to $10M ARR in next 12 months',
        category: 'financial'
      },
      {
        id: 'fp-2',
        content: 'Highlight 68% improvement in CAC payback period to 8 months through sales automation',
        category: 'financial'
      },
      {
        id: 'fp-3',
        content: 'Detail diversified revenue mix with no customer representing >5% of total revenue',
        category: 'financial'
      },
      {
        id: 'fp-4',
        content: 'Present 83% gross margins with clear path to 88% through increased automation',
        category: 'financial'
      }
    ]
  },
  {
    id: 'growth-opportunities',
    title: 'Growth Opportunities',
    description: 'Strategic expansion and scaling possibilities',
    insights: [
      {
        id: 'go-1',
        content: 'Target 5 new market verticals representing $8.2B additional TAM opportunity',
        category: 'strategic'
      },
      {
        id: 'go-2',
        content: 'Launch 3 new product lines with projected 65% gross margins in next 18 months',
        category: 'strategic'
      },
      {
        id: 'go-3',
        content: 'Implement AI-driven operations to reduce costs by 35% while improving service quality',
        category: 'operational'
      },
      {
        id: 'go-4',
        content: 'Expand through 5 strategic partnerships adding $12M to pipeline within 12 months',
        category: 'strategic'
      }
    ]
  }
];
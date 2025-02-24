import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, FileSpreadsheet, Building2, Users, Briefcase, FileBarChart, Trash2, RefreshCw, Download, Brain } from 'lucide-react';
import { DocumentInsights } from './DocumentInsights';

interface DocumentSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  documents: {
    name: string;
    description: string;
  }[];
}

interface UploadedDocument {
  name: string;
  size: string;
  uploadDate: string;
  file?: File;
  insights?: string[];
  qualityScore?: number;
}

const documentSections: DocumentSection[] = [
  {
    title: 'Financial Documents',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    description: 'Core financial statements and records',
    documents: [
      { name: 'Financial Statements', description: 'Balance sheets, income statements, and cash flow statements' },
      { name: 'Tax Returns', description: 'Last 3 years of business tax returns' }
    ]
  },
  {
    title: 'Sales & Customer Information',
    icon: <FileBarChart className="h-5 w-5" />,
    description: 'Sales and customer-related documents',
    documents: [
      { name: 'Sales Data', description: 'Historical sales data and metrics' },
      { name: 'Customer Contracts', description: 'Active customer contracts and agreements' }
    ]
  },
  {
    title: 'Human Resources',
    icon: <Users className="h-5 w-5" />,
    description: 'Employee and organizational information',
    documents: [
      { name: 'Employee Information', description: 'Employee records, contracts, and organizational structure' }
    ]
  },
  {
    title: 'Business Documents',
    icon: <Building2 className="h-5 w-5" />,
    description: 'Core business documentation',
    documents: [
      { name: 'Business Plan', description: 'Current business plan and strategy documents' },
      { name: 'Intellectual Property', description: 'Patents, trademarks, and IP documentation' }
    ]
  },
  {
    title: 'Legal Documents',
    icon: <Briefcase className="h-5 w-5" />,
    description: 'Legal and compliance documentation',
    documents: [
      { name: 'Legal Documents', description: 'Contracts, agreements, and legal records' }
    ]
  }
];

// Mock AI analysis function
const analyzeDocument = (docName: string): { insights: string[]; qualityScore: number } => {
  const mockInsights = {
    'Financial Statements': {
      insights: [
        'Strong revenue growth trajectory with 42% YoY increase',
        'Healthy profit margins above industry average at 28%',
        'Robust cash flow position with 3.5x coverage ratio'
      ],
      qualityScore: 9.2
    },
    'Tax Returns': {
      insights: [
        'Consistent tax compliance record over past 3 years',
        'Effective tax rate optimization at 21.5%',
        'Well-documented deductions and credits'
      ],
      qualityScore: 8.8
    },
    'Sales Data': {
      insights: [
        'Customer acquisition cost reduced by 35% YoY',
        'High customer lifetime value at $85,000',
        'Diversified customer base across industries'
      ],
      qualityScore: 9.5
    },
    'Customer Contracts': {
      insights: [
        'Multi-year commitments from 75% of enterprise clients',
        'Strong SLA compliance rate of 99.9%',
        'Favorable payment terms with net-30 standard'
      ],
      qualityScore: 8.9
    },
    'Employee Information': {
      insights: [
        'Low turnover rate of 8% in technical roles',
        'Competitive compensation at 75th percentile',
        'Strong skill distribution across key areas'
      ],
      qualityScore: 9.0
    },
    'Business Plan': {
      insights: [
        'Clear market positioning with defined USPs',
        'Realistic growth projections backed by data',
        'Comprehensive risk mitigation strategies'
      ],
      qualityScore: 9.3
    },
    'Intellectual Property': {
      insights: [
        'Portfolio of 12 granted patents',
        'Strong trademark protection in key markets',
        'Valuable proprietary technology assets'
      ],
      qualityScore: 9.1
    },
    'Legal Documents': {
      insights: [
        'Well-structured governance framework',
        'Comprehensive compliance documentation',
        'Clear ownership and liability structures'
      ],
      qualityScore: 8.7
    }
  };

  return mockInsights[docName as keyof typeof mockInsights] || {
    insights: [
      'Document structure follows industry standards',
      'Key information clearly presented',
      'Comprehensive coverage of topic'
    ],
    qualityScore: 8.5
  };
};

interface DealDocumentsProps {
  dealId: string;
}

export function DealDocuments({ dealId }: DealDocumentsProps) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, UploadedDocument>>({});
  const [dragOver, setDragOver] = useState<string | null>(null);

  const handleFileUpload = (sectionTitle: string, docName: string, file?: File) => {
    const { insights, qualityScore } = analyzeDocument(docName);
    
    const newDoc: UploadedDocument = {
      name: file?.name || `${docName}.pdf`,
      size: file ? formatFileSize(file.size) : '2.5 MB',
      uploadDate: new Date().toLocaleDateString(),
      file,
      insights,
      qualityScore
    };

    setUploadedDocs(prev => ({
      ...prev,
      [`${sectionTitle}-${docName}`]: newDoc
    }));
  };

  const handleRemoveDocument = (sectionTitle: string, docName: string) => {
    setUploadedDocs(prev => {
      const newDocs = { ...prev };
      delete newDocs[`${sectionTitle}-${docName}`];
      return newDocs;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDragOver = (e: React.DragEvent, sectionTitle: string, docName: string) => {
    e.preventDefault();
    setDragOver(`${sectionTitle}-${docName}`);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent, sectionTitle: string, docName: string) => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(sectionTitle, docName, file);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
      <div className="px-6 pt-6 pb-4 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Deal Documents</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Upload and manage your deal-related documents
        </p>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentSections.map((section) => (
          <div
            key={section.title}
            className="group border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-800"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg text-white">
                  {section.icon}
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {section.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{section.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {section.documents.map((doc) => {
                const docKey = `${section.title}-${doc.name}`;
                const isUploaded = docKey in uploadedDocs;
                const isDraggedOver = dragOver === docKey;
                const uploadedDoc = uploadedDocs[docKey];

                return (
                  <div key={doc.name}>
                    <div
                      onDragOver={(e) => handleDragOver(e, section.title, doc.name)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, section.title, doc.name)}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                        isDraggedOver
                          ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-dashed border-indigo-300 dark:border-indigo-700'
                          : isUploaded
                          ? 'bg-green-50 dark:bg-green-900/20'
                          : 'bg-slate-50 dark:bg-slate-700/30'
                      }`}
                    >
                      <div className="flex items-start space-x-3 flex-1">
                        <FileText className={`h-5 w-5 ${
                          isUploaded ? 'text-green-500' : 'text-slate-400'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white">{doc.name}</p>
                          {isUploaded ? (
                            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                              <span>{uploadedDoc.name}</span>
                              <span>{uploadedDoc.size}</span>
                              <span>{uploadedDoc.uploadDate}</span>
                            </div>
                          ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400">{doc.description}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {isUploaded ? (
                          <>
                            <button
                              onClick={() => handleFileUpload(section.title, doc.name)}
                              className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              title="Replace file"
                            >
                              <RefreshCw className="h-4 w-4" />
                            </button>
                            <button
                              className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              title="Download file"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleRemoveDocument(section.title, doc.name)}
                              className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                              title="Remove file"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <label className="flex items-center px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">
                            <Upload className="h-4 w-4 mr-1" />
                            Upload
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleFileUpload(section.title, doc.name, file);
                              }}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                    
                    {isUploaded && uploadedDoc.insights && uploadedDoc.qualityScore && (
                      <DocumentInsights
                        insights={uploadedDoc.insights}
                        qualityScore={uploadedDoc.qualityScore}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
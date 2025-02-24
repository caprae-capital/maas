import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { MatchesContent } from '@/components/matches/MatchesContent';
import { DealRoomContent } from '@/components/deals/DealRoomContent';
import { SettingsContent } from '@/components/settings/SettingsContent';
import DocumentStore from './DocumentStore';
import CIMGeneratorPage from './CIMGenerator';
import ValuationTool from './ValuationTool';
import ToolsPage from './ToolsPage';
import ProfilePage from './ProfilePage';
import { useAuth } from '@/hooks/useAuth';

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 min-h-screen">
        <Routes>
          <Route path="matches" element={<MatchesContent />} />
          <Route path="deals" element={<DealRoomContent />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/documents" element={<DocumentStore />} />
          <Route path="tools/cim" element={<CIMGeneratorPage />} />
          <Route path="tools/valuation" element={<ValuationTool />} />
          <Route path="settings" element={<SettingsContent />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<MatchesContent />} />
        </Routes>
      </main>
    </div>
  );
}
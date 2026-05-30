import React, { useState } from 'react';
import { RoleSelector } from '../components/RoleSelector';
import type { UserRole } from '../components/RoleSelector';
import { LoginForm } from '../components/LoginForm';
import { Dashboard } from '../components/Dashboard';
import { TopRightDoodles, BottomLeftDoodles } from '../components/EducationalDoodles';
import { Check } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleSelectRole = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  const handleLoginSuccess = (userName: string) => {
    setLoggedInUser(userName);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setSelectedRole(null);
  };

  // If the user has logged in, show the beautiful dashboard!
  if (loggedInUser && selectedRole) {
    return (
      <Dashboard 
        role={selectedRole} 
        userName={loggedInUser} 
        onLogout={handleLogout} 
      />
    );
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        {/* Left Side: Brand Panel */}
        <section className="brand-panel">
          {/* SVG Doodles */}
          <TopRightDoodles />
          <BottomLeftDoodles />

          <div className="brand-panel-content">
            {/* Logo Pill */}
            <div className="logo-pill-wrapper">
              <span className="logo-pill">AulaConnect</span>
            </div>

            {/* Headline */}
            <h1 className="brand-headline">
              Conectando la comunidad Educativa
            </h1>

            {/* Paragraph Description */}
            <p className="brand-description">
              Una plataforma pensada para fortalecer la comunicación entre instituciones, docentes y familias colombianas.
            </p>

            {/* Value Points List */}
            <ul className="value-points-list">
              <li>
                <div className="check-icon-wrapper">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Comunicación en tiempo real</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Gestión de horarios y eventos</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Actividades extracurriculares</span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>Seguridad y privacidad</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Right Side: Form Panel */}
        <section className="form-panel">
          <div className="form-panel-content">
            {!selectedRole ? (
              <RoleSelector onSelectRole={handleSelectRole} />
            ) : (
              <LoginForm 
                role={selectedRole} 
                onBack={handleBack} 
                onLoginSuccess={handleLoginSuccess}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

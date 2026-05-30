import React from 'react';
import { School, Presentation, Users, ChevronRight } from 'lucide-react';

export type UserRole = 'rector' | 'docente' | 'acudiente';

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'rector' as UserRole,
      title: 'Rector / Director',
      description: 'Registra tu institución, administra docentes y genera código del colegio',
      icon: School,
      color: '#3b82f6', // blue
      bgColor: '#eff6ff',
    },
    {
      id: 'docente' as UserRole,
      title: 'Docente',
      description: 'Accede con el código de tu institución, publica avisos, gestiona horarios y chatea con los acudientes.',
      icon: Presentation,
      color: '#10b981', // emerald
      bgColor: '#ecfdf5',
    },
    {
      id: 'acudiente' as UserRole,
      title: 'Acudiente / Padre de familia',
      description: 'Mantente al día con las actividades de tu hijo, comunícate con los docentes y conoce la comunidad.',
      icon: Users,
      color: '#8b5cf6', // violet
      bgColor: '#f5f3ff',
    },
  ];

  return (
    <div className="role-selector-container">
      <div className="role-selector-header animate-fade-in">
        <h1 className="welcome-title">¡Bienvenido!</h1>
        <p className="welcome-subtitle">Selecciona tu rol para continuar</p>
      </div>

      <div className="role-cards-list">
        {roles.map((role, index) => {
          const IconComponent = role.icon;
          return (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="role-card-button animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={`Seleccionar rol de ${role.title}`}
            >
              <div className="role-card-content">
                <div
                  className="role-card-icon-wrapper"
                  style={{
                    color: role.color,
                    backgroundColor: role.bgColor
                  }}
                >
                  <IconComponent size={26} strokeWidth={1.8} />
                </div>
                <div className="role-card-text">
                  <h3 className="role-card-title">{role.title}</h3>
                  <p className="role-card-description">{role.description}</p>
                </div>
              </div>
              <ChevronRight className="role-card-arrow" size={20} strokeWidth={2} />
            </button>
          );
        })}
      </div>

      <p className="terms-text animate-fade-in">
        Al ingresar aceptas los <a href="#terminos" className="terms-link">Términos de uso</a> y la <a href="#privacidad" className="terms-link">Política de privacidad</a>
      </p>
    </div>
  );
};
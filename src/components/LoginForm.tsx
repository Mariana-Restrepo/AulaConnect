import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  Hash, 
  User, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle,
  Loader2
} from 'lucide-react';
import type { UserRole } from './RoleSelector';

interface LoginFormProps {
  role: UserRole;
  onBack: () => void;
  onLoginSuccess: (userName: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ role, onBack, onLoginSuccess }) => {
  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instCode, setInstCode] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const getRoleDetails = () => {
    switch (role) {
      case 'rector':
        return {
          title: 'Ingreso Rector / Director',
          subtitle: 'Acceso administrativo para la gestión del colegio',
          primaryColor: '#3b82f6',
        };
      case 'docente':
        return {
          title: 'Ingreso Docente',
          subtitle: 'Gestiona tus aulas, calificaciones y comunicados',
          primaryColor: '#10b981',
        };
      case 'acudiente':
        return {
          title: 'Ingreso Acudiente',
          subtitle: 'Sigue el progreso educativo de tu hijo en tiempo real',
          primaryColor: '#8b5cf6',
        };
    }
  };

  const details = getRoleDetails();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (role === 'rector') {
      if (!email || !password) {
        setError('Por favor, completa todos los campos.');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Por favor, ingresa un correo electrónico válido.');
        return;
      }
    } else if (role === 'docente') {
      if (!instCode || !email || !password) {
        setError('Por favor, completa todos los campos obligatorios.');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Por favor, ingresa un correo electrónico válido.');
        return;
      }
    } else if (role === 'acudiente') {
      if (!studentCode || !password) {
        setError('Por favor, completa el código del estudiante y tu contraseña.');
        return;
      }
    }

    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Delay calling parent success handler for animation to play
      setTimeout(() => {
        let name = 'Usuario';
        if (role === 'rector') name = 'Director Alejandro';
        if (role === 'docente') name = 'Profesora Mariana';
        if (role === 'acudiente') name = 'Sra. Restrepo';
        onLoginSuccess(name);
      }, 1200);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="login-success-card animate-scale-up">
        <div className="success-icon-wrapper" style={{ backgroundColor: `${details.primaryColor}15`, color: details.primaryColor }}>
          <CheckCircle size={48} strokeWidth={1.8} className="animate-pulse" />
        </div>
        <h2 className="success-title">¡Ingreso Exitoso!</h2>
        <p className="success-subtitle">Estamos preparando tu panel de AulaConnect...</p>
        <div className="loading-bar-container">
          <div className="loading-bar-fill" style={{ backgroundColor: details.primaryColor }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-form-container animate-slide-in">
      <button onClick={onBack} className="back-button" aria-label="Volver a la selección de roles">
        <ArrowLeft size={18} />
        <span>Volver a roles</span>
      </button>

      <div className="form-header">
        <h2 className="form-title" style={{ borderLeft: `4px solid ${details.primaryColor}`, paddingLeft: '12px' }}>
          {details.title}
        </h2>
        <p className="form-subtitle">{details.subtitle}</p>
      </div>

      {error && (
        <div className="error-banner animate-shake">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="login-form">
        {/* Institutional Code (Only for Docente) */}
        {role === 'docente' && (
          <div className="input-group">
            <label className="input-label" htmlFor="instCode">Código del Colegio</label>
            <div className="input-wrapper">
              <Hash className="input-icon" size={18} />
              <input
                id="instCode"
                type="text"
                value={instCode}
                onChange={(e) => setInstCode(e.target.value.toUpperCase())}
                placeholder="Ej: COL-12345"
                className="form-input"
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
            <span className="input-help">Solicita este código al rector de tu institución.</span>
          </div>
        )}

        {/* Student Code (Only for Acudiente) */}
        {role === 'acudiente' && (
          <div className="input-group">
            <label className="input-label" htmlFor="studentCode">Código de Estudiante o Familia</label>
            <div className="input-wrapper">
              <User className="input-icon" size={18} />
              <input
                id="studentCode"
                type="text"
                value={studentCode}
                onChange={(e) => setStudentCode(e.target.value.toUpperCase())}
                placeholder="Ej: EST-98765"
                className="form-input"
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
            <span className="input-help">Código único de vinculación del alumno.</span>
          </div>
        )}

        {/* Email Address (Rector and Docente) */}
        {role !== 'acudiente' && (
          <div className="input-group">
            <label className="input-label" htmlFor="email">Correo Electrónico Institucional</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@colegio.edu.co"
                className="form-input"
                autoComplete="email"
                disabled={isLoading}
              />
            </div>
          </div>
        )}

        {/* Password (All roles) */}
        <div className="input-group">
          <div className="label-row">
            <label className="input-label" htmlFor="password">Contraseña</label>
            {role === 'rector' && (
              <a href="#forgot" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
            )}
          </div>
          <div className="input-wrapper">
            <Lock className="input-icon" size={18} />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-input"
              autoComplete="current-password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
              tabIndex={-1}
              disabled={isLoading}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember me (All roles) */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="form-checkbox"
              disabled={isLoading}
            />
            <span className="checkbox-text">Recordarme en este dispositivo</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          style={{ backgroundColor: details.primaryColor }}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="spinner-icon animate-spin" size={18} />
              <span>Validando credenciales...</span>
            </>
          ) : (
            <span>Iniciar Sesión</span>
          )}
        </button>
      </form>
    </div>
  );
};

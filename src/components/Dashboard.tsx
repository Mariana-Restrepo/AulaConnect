import React, { useState } from 'react';
import { 
  LogOut, 
  Calendar, 
  MessageSquare, 
  Bell, 
  BookOpen, 
  Users, 
  Settings, 
  Clock, 
  CheckSquare, 
  Plus,
  TrendingUp,
  FileText
} from 'lucide-react';
import type { UserRole } from './RoleSelector';

interface DashboardProps {
  role: UserRole;
  userName: string;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ role, userName, onLogout }) => {
  const [activeTab, setActiveTab] = useState('inicio');

  const getRoleTheme = () => {
    switch (role) {
      case 'rector': return { color: '#3b82f6', bg: '#eff6ff', label: 'Rector / Director' };
      case 'docente': return { color: '#10b981', bg: '#ecfdf5', label: 'Docente' };
      case 'acudiente': return { color: '#8b5cf6', bg: '#f5f3ff', label: 'Acudiente / Padre' };
    }
  };

  const theme = getRoleTheme();

  // Mock Data based on role
  const getDashboardData = () => {
    switch (role) {
      case 'rector':
        return {
          stats: [
            { label: 'Docentes Activos', value: '24', icon: Users, change: '+2 este mes' },
            { label: 'Estudiantes', value: '412', icon: BookOpen, change: '98% asistencia' },
            { label: 'Avisos Globales', value: '5', icon: Bell, change: '1 programado' },
            { label: 'Reportes Generados', value: '18', icon: FileText, change: 'Actualizado hoy' },
          ],
          announcements: [
            { title: 'Reunión de Coordinación Académica', date: 'Hoy, 3:00 PM', category: 'Reunión' },
            { title: 'Cierre del Primer Trimestre de Calificaciones', date: 'Junio 5, 2026', category: 'Académico' },
            { title: 'Mantenimiento de la Sala de Cómputo', date: 'Junio 8, 2026', category: 'Infraestructura' },
          ],
          actions: ['Registrar Docente', 'Crear Comunicado General', 'Ver Reporte Mensual']
        };
      case 'docente':
        return {
          stats: [
            { label: 'Mis Grupos', value: '4 Clases', icon: BookOpen, change: '8°A, 8°B, 9°A, 10°B' },
            { label: 'Tareas por Calificar', value: '14', icon: CheckSquare, change: 'Vence mañana' },
            { label: 'Chats Activos', value: '8 Padres', icon: MessageSquare, change: '3 mensajes nuevos' },
            { label: 'Próxima Clase', value: '8:30 AM', icon: Clock, change: 'Matemáticas - 8°A' },
          ],
          announcements: [
            { title: 'Entrega de Notas Parciales', date: 'Mañana, 6:00 PM', category: 'Evaluación' },
            { title: 'Capacitación en Nuevas Herramientas AulaConnect', date: 'Junio 4, 2026', category: 'Talleres' },
            { title: 'Preparación de Materiales para Feria de Ciencia', date: 'Junio 12, 2026', category: 'Proyecto' },
          ],
          actions: ['Subir Tarea / Actividad', 'Enviar Mensaje a Acudientes', 'Registrar Asistencia']
        };
      case 'acudiente':
        return {
          stats: [
            { label: 'Hijo Vinculado', value: 'Mateo Restrepo', icon: Users, change: 'Grado 8° A' },
            { label: 'Asistencia', value: '96%', icon: Clock, change: '1 retraso justificado' },
            { label: 'Promedio General', value: '4.6 / 5.0', icon: TrendingUp, change: 'Top 5 del curso' },
            { label: 'Tareas Pendientes', value: '2', icon: CheckSquare, change: 'Entrega este viernes' },
          ],
          announcements: [
            { title: 'Reunión General de Padres de Familia', date: 'Viernes, 7:00 AM', category: 'Reunión' },
            { title: 'Examen Final de Álgebra - Mateo', date: 'Junio 3, 2026', category: 'Evaluación' },
            { title: 'Salida Pedagógica al Planetario', date: 'Junio 15, 2026', category: 'Evento' },
          ],
          actions: ['Justificar Inasistencia', 'Escribir al Director de Grupo', 'Ver Boletín de Notas']
        };
    }
  };

  const data = getDashboardData();

  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Top Navbar */}
      <header className="dashboard-navbar">
        <div className="nav-brand">
          <div className="brand-logo-circle">AC</div>
          <span className="brand-text">AulaConnect</span>
        </div>

        <div className="nav-actions">
          <div className="nav-notifications" title="Notificaciones">
            <Bell size={20} />
            <span className="nav-badge"></span>
          </div>

          <div className="user-profile-widget">
            <div className="user-avatar" style={{ backgroundColor: theme.color }}>
              {userName.charAt(0)}
            </div>
            <div className="user-info-text">
              <span className="user-name">{userName}</span>
              <span className="user-role-badge" style={{ color: theme.color, backgroundColor: theme.bg }}>
                {theme.label}
              </span>
            </div>
          </div>

          <button onClick={onLogout} className="logout-btn" title="Cerrar Sesión">
            <LogOut size={20} />
            <span className="logout-text">Cerrar Sesión</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button 
              onClick={() => setActiveTab('inicio')} 
              className={`sidebar-nav-item ${activeTab === 'inicio' ? 'active' : ''}`}
              style={activeTab === 'inicio' ? { color: theme.color, borderLeftColor: theme.color } : {}}
            >
              <BookOpen size={18} />
              <span>Resumen</span>
            </button>
            <button 
              onClick={() => setActiveTab('horarios')} 
              className={`sidebar-nav-item ${activeTab === 'horarios' ? 'active' : ''}`}
              style={activeTab === 'horarios' ? { color: theme.color, borderLeftColor: theme.color } : {}}
            >
              <Calendar size={18} />
              <span>Horarios y Eventos</span>
            </button>
            <button 
              onClick={() => setActiveTab('mensajes')} 
              className={`sidebar-nav-item ${activeTab === 'mensajes' ? 'active' : ''}`}
              style={activeTab === 'mensajes' ? { color: theme.color, borderLeftColor: theme.color } : {}}
            >
              <MessageSquare size={18} />
              <span>Mensajería</span>
            </button>
            <button 
              onClick={() => setActiveTab('ajustes')} 
              className={`sidebar-nav-item ${activeTab === 'ajustes' ? 'active' : ''}`}
              style={activeTab === 'ajustes' ? { color: theme.color, borderLeftColor: theme.color } : {}}
            >
              <Settings size={18} />
              <span>Configuración</span>
            </button>
          </nav>

          <div className="sidebar-footer">
            <p className="sidebar-footer-title">AulaConnect v1.0.0</p>
            <p className="sidebar-footer-text">Conectando la comunidad educativa</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="dashboard-content">
          {activeTab === 'inicio' && (
            <div className="tab-pane animate-fade-in">
              <div className="welcome-banner">
                <h1 className="content-welcome-title">¡Hola de nuevo, {userName}!</h1>
                <p className="content-welcome-subtitle">
                  Aquí tienes el resumen de tu institución educativa para el día de hoy.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="stat-card">
                      <div className="stat-card-left">
                        <span className="stat-label">{stat.label}</span>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-change">{stat.change}</span>
                      </div>
                      <div className="stat-card-icon" style={{ backgroundColor: `${theme.color}15`, color: theme.color }}>
                        <Icon size={22} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Two Column Layout */}
              <div className="dashboard-columns">
                {/* Announcements column */}
                <div className="dashboard-column-card">
                  <div className="column-card-header">
                    <h3 className="column-card-title">Anuncios y Próximos Eventos</h3>
                    <button className="column-card-action-btn" style={{ color: theme.color }}>Ver todos</button>
                  </div>
                  <div className="announcements-list">
                    {data.announcements.map((ann, i) => (
                      <div key={i} className="announcement-item">
                        <div className="announcement-bullet" style={{ backgroundColor: theme.color }}></div>
                        <div className="announcement-details">
                          <h4 className="announcement-item-title">{ann.title}</h4>
                          <div className="announcement-meta">
                            <span className="announcement-date">{ann.date}</span>
                            <span className="announcement-category" style={{ color: theme.color, backgroundColor: `${theme.color}10` }}>
                              {ann.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions column */}
                <div className="dashboard-column-card">
                  <div className="column-card-header">
                    <h3 className="column-card-title">Acciones Rápidas</h3>
                  </div>
                  <div className="quick-actions-list">
                    {data.actions.map((action, i) => (
                      <button key={i} className="quick-action-btn-item">
                        <div className="quick-action-btn-circle" style={{ backgroundColor: `${theme.color}10`, color: theme.color }}>
                          <Plus size={18} />
                        </div>
                        <span className="quick-action-btn-text">{action}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Decorative card */}
                  <div className="support-card" style={{ background: `linear-gradient(135deg, ${theme.color}ee, ${theme.color}bb)` }}>
                    <h4 className="support-card-title">¿Necesitas ayuda?</h4>
                    <p className="support-card-text">Consulta nuestro centro de soporte AulaConnect o escríbenos directamente.</p>
                    <button className="support-card-btn">Contactar Soporte</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'inicio' && (
            <div className="tab-pane-fallback animate-fade-in">
              <div className="fallback-illustration" style={{ color: theme.color }}>
                <Settings size={64} className="animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <h2 className="fallback-title">Módulo en Desarrollo</h2>
              <p className="fallback-subtitle">
                Estamos trabajando intensamente en el módulo de <strong>{activeTab === 'horarios' ? 'Horarios y Eventos' : activeTab === 'mensajes' ? 'Mensajería' : 'Configuración'}</strong>. ¡Estará listo muy pronto!
              </p>
              <button onClick={() => setActiveTab('inicio')} className="fallback-btn" style={{ backgroundColor: theme.color }}>
                Volver al Inicio
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

import React from 'react';
import { Settings } from 'lucide-react';

const UnderConstruction = ({ pageName }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      textAlign: 'center',
      minHeight: '60vh',
      backgroundColor: '#fdf8f4'
    }}>
      <Settings size={64} color="#e77e22" style={{ marginBottom: '2rem', animation: 'spin 4s linear infinite' }} />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#374151', marginBottom: '1rem' }}>
        {pageName}
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '500px' }}>
        This page is currently under construction. Please check back later!
      </p>

      <style>
        {`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default UnderConstruction;

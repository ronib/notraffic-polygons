import React from 'react';

const headerStyle: React.CSSProperties = {
  position: 'fixed',          
  top: 0,
  left: 0,
  right: 0,
  height: '60px',             
  backgroundColor: '#f5f7fd',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1000,
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'sans-serif',
  fontSize: '1.8rem',
  fontWeight: 700,
  margin: 0,
};

const noStyle: React.CSSProperties = {
  color: '#00aee6', 
};

const trafficStyle: React.CSSProperties = {
  color: '#2f3b59', 
};

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>
        <span style={noStyle}>no</span>
        <span style={trafficStyle}>traffic</span>
      </h1>
    </header>
  );
};

export default Header;
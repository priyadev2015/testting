// src/app/components/Tooltip.jsx
import React from 'react';

const Tooltip = ({ title, description, style }) => (
  <div style={{ ...style, background: 'white', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Tooltip;

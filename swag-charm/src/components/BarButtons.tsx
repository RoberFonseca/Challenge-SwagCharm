import React from 'react';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BarButtons: React.FC = () => {
  const theme = createTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: '#E6E8E9',
        height: '50px',
      }}
    >
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          marginLeft: '80px',
          fontFamily: 'Open Sans',
        }}
      >
        All Products
      </Button>
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          fontFamily: 'Open sans',
        }}
      >
        Packaging
      </Button>
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          fontFamily: 'Open sans',
        }}
      >
        Drinkware
      </Button>
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          fontFamily: 'Open sans',
        }}
      >
        Apparel
      </Button>
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          fontFamily: 'Open sans',
        }}
      >
        Notebooks
      </Button>
      <Button
        style={{
          margin: theme.spacing(1),
          color: '#535C67',
          fontFamily: 'Open sans',
        }}
      >
        Backpacks
      </Button>
    </div>
  );
};
export default BarButtons;

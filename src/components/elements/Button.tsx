import React from 'react';
import type {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const Button: FunctionComponent<JSX.IntrinsicElements['button']> = props => {
  return <Element type="button" {...props} />;
};

const Element = styled.button({
  color: '#FFFFFF',
  backgroundColor: 'var(--color-primary)',
  height: '40px',
  minWidth: 'fit-content',
  padding: '8px 16px',
  borderRadius: '20px',
  textAlign: 'center',
  lineHeight: '24px',
  fontWeight: 700,
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0px 4px 4px rgba(25, 0, 65, 0.4)',
  '&:hover': {
    backgroundColor: 'var(--color-primary-dark)',
    boxShadow: '0px 4px 4px rgba(25, 0, 65, 0.7)',
  },
  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
});

export default Button;

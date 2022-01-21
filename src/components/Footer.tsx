import React, {FC} from 'react';
import styled from '@emotion/styled';

const Footer: FC = () => {
  return <Container>All rights reserved</Container>;
};

const Container = styled.footer({
  height: '4rem',
  backgroundColor: 'var(--color-primary-dark)',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'center',
  color: '#ffffff',
  width: '100%',
  bottom: 0,
  fontFamily: 'Roboto',
});

export default Footer;

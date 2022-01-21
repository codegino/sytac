import React, {FC} from 'react';
import styled from '@emotion/styled';
import _TrafikMeister from '../icons/trafikmeister.svg';
import _Vehicles from '../icons/train.svg';
import {mq} from '../utils/media-query';

const Header: FC = () => {
  return (
    <Container>
      <CompanyLogo src={_TrafikMeister} alt="Logo" className="company-logo" />
      <VehiclesLogo src={_Vehicles} alt="Vehicles" />
    </Container>
  );
};

const Container = styled.header({
  padding: '0.5rem 1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 0,
  height: '4rem',
  backgroundColor: 'var(--color-primary-dark)',

  borderBottom: '1px solid black',

  [mq('sm')]: {
    height: '5rem',
    justifyContent: 'space-between',
    gridColumn: 'span 2',
    marginBottom: '2rem',
  },

  [mq('md')]: {
    height: '9rem',
  },
});

const CompanyLogo = styled.img({
  width: 300,
  height: 50,

  [mq('sm')]: {
    width: 360,
    height: 62,
  },

  [mq('md')]: {
    width: 500,
    height: 100,
  },
});

const VehiclesLogo = styled.img({
  width: 235,
  height: 139,
  display: 'none',
  [mq('md')]: {
    display: 'block',
  },
});

export default Header;

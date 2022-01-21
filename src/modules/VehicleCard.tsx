import React, {FC} from 'react';
import styled from '@emotion/styled';
import Heading3 from '../components/typography/Heading3';
import Heading4 from '../components/typography/Heading4';
import type {Vehicle} from '../models/vehicle';
import {useFilterState} from '../state/filter-state';
import {capitalize} from '../utils/capitalize';

const VehicleCard: FC<{vehicle: Vehicle}> = ({vehicle}) => {
  const {color: selectedColor} = useFilterState();

  return (
    <Container>
      <Information>
        <b>Brand:</b>
        <div className="brand">
          <Heading3>{vehicle.brand}</Heading3>
        </div>

        <b>Type:</b>
        <div className="type">
          <Heading4>{capitalize(vehicle.type)}</Heading4>
        </div>
        <b>Colors:</b>
        <div className="colors">
          {selectedColor ? (
            <div
              className="color"
              style={{backgroundColor: selectedColor}}
              title={selectedColor}
            />
          ) : (
            vehicle.colors.map(color => (
              <div
                key={color}
                className="color"
                title={color}
                style={{backgroundColor: color}}
              />
            ))
          )}
        </div>
      </Information>
      <Image src={vehicle.img} alt={vehicle.brand} height={180} width={250} />
    </Container>
  );
};

export const VehicleCardSkeleton: FC = () => {
  return (
    <Container>
      <Information>
        <b>Brand:</b>
        <div className="brand brand-placeholder"></div>

        <b>Type:</b>
        <div className="type type-placeholder"></div>

        <b>Colors:</b>
        <div className="type type-placeholder"></div>
      </Information>
      <Image />
    </Container>
  );
};

const Image = styled.img({
  height: 170,
  width: '50%',
  borderRadius: '0.5rem',
  backgroundColor: '#bababa',
});

const Information = styled.div({
  height: '100%',
  width: '50%',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  flex: 1,
  bottom: 0,
  '& .type': {
    marginBottom: '0.5rem',
    fontSize: '1.3rem',
    '&-placeholder': {
      backgroundColor: '#bababa',
      borderRadius: 5,
      height: 19,
      width: 50,
    },
  },
  '& .brand': {
    marginBottom: '0.75rem',
    paddingRight: '1rem',
    fontSize: '1.5rem',
    '&-placeholder': {
      backgroundColor: '#bababa',
      borderRadius: 5,
      height: 21,
      width: 100,
    },
  },
  '& .colors': {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: 3,
    rowGap: 3,
    '& .color': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',

      padding: '0.15rem 0.3rem',
      height: 20,
      width: 20,
      borderRadius: 2,
    },
  },
});

const Container = styled.div({
  height: '100%',
  width: '100%',
  borderRadius: 6,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  alignItems: 'flex-start',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  backgroundColor: 'hsl(220, 100%, 98%)',
});

export default React.memo(VehicleCard);

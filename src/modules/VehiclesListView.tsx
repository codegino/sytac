import React, {FC} from 'react';
import styled from '@emotion/styled/';
import Heading2 from '../components/typography/Heading2';
import {Vehicle} from '../models/vehicle';
import {useFilterState} from '../state/filter-state';
import {mq} from '../utils/media-query';
import EmptyList from './EmptyList';
import SelectionSummary from './SelectionSummary';
import VehicleCard, {VehicleCardSkeleton} from './VehicleCard';

type StateType = {
  type: string;
  brand: string;
  color: string;
};

type FilterFunction = (
  vehicle: Vehicle,
  {type, brand, color}: StateType,
) => boolean;

const filterFunction: FilterFunction = (vehicle, {type, brand, color}) => {
  const isMatchingType = !type || vehicle.type === type;

  const isMatchingBrand = !brand || vehicle.brand === brand;

  const isMatchingColor = !color || vehicle.colors.some(v => v === color);

  return isMatchingType && isMatchingBrand && isMatchingColor;
};

const VehiclesListView: FC<{vehicles: Vehicle[]; error: string}> = ({
  vehicles,
  error,
}) => {
  if (error) {
    // This should be outside of this Component.
    // But since the application is very simple,
    // I think it's fine to put it here.
    throw new Error(error);
  }

  const {type, color, brand} = useFilterState();

  const filteredList = vehicles.filter(vehicle => {
    return filterFunction(vehicle, {type, brand, color});
  });

  return (
    <Container data-testid="vehicles-container">
      <Heading2>Vehicles</Heading2>
      <ListWrapper>
        {/* We can use pagination or react-virtualized/window if there will be too many data */}
        {filteredList.map(vehicle => (
          <Li key={vehicle.id} data-testid="vehicle-container">
            <VehicleCard vehicle={vehicle} />
          </Li>
        ))}

        {(type || color || brand) && filteredList.length === 0 && <EmptyList />}
        <SelectionSummary />
      </ListWrapper>
    </Container>
  );
};

export const ListViewSkeleton: FC = () => {
  return (
    <Container role="alert" aria-label="Loading">
      <Heading2>Vehicles</Heading2>
      <ListWrapper>
        {Array.from({length: 5}).map((_, i) => (
          <Li key={i}>
            <VehicleCardSkeleton />
          </Li>
        ))}
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div({
  minWidth: 300,
  width: '100%',
  height: 'fit-content',
  fontFamily: 'Roboto',
  '& h2': {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    [mq('md') + '']: {
      textAlign: 'left',
      gridColumn: 'span 2',
    },
  },
});

const Li = styled.li({
  height: 200,
  listStyle: 'none',
  '&:not(:last-of-type)': {
    marginBottom: '1rem',
  },
  boxSizing: 'border-box',
});

const ListWrapper = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: '1rem',
  backgroundColor: '#ffffff',
  borderRadius: 10,
});

export default VehiclesListView;

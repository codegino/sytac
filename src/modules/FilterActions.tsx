import React, {FC, useEffect} from 'react';
import styled from '@emotion/styled';
import Button from '../components/elements/Button';
import Heading2 from '../components/typography/Heading2';
import {Vehicle} from '../models/vehicle';
import {useFilterState} from '../state/filter-state';
import {mq} from '../utils/media-query';
import FormControl from './FormControl';

type Props = {
  disabled: boolean;
  vehicles: Vehicle[];
};

const FilterActions: FC<Props> = ({disabled, vehicles}) => {
  const {type, color, brand, dispatch} = useFilterState();

  const [types, setTypes] = React.useState<string[]>([]);
  const [colors, setColors] = React.useState<string[]>([]);
  const [brands, setBrands] = React.useState<string[]>([]);

  useEffect(() => {
    const typeSet = new Set<string>();

    vehicles.forEach(vehicle => {
      typeSet.add(vehicle.type);
    });

    setTypes(Array.from(typeSet));
  }, [vehicles]);

  useEffect(() => {
    const filtered = vehicles.filter(vehicle => vehicle.type === type);

    setBrands(filtered.map(vehicle => vehicle.brand));

    if (!type) {
      dispatch({type: 'brand', payload: ''});
      dispatch({type: 'color', payload: ''});
    }
  }, [dispatch, type, vehicles]);

  useEffect(() => {
    const filtered = vehicles.filter(vehicle => vehicle.brand === brand);

    const colorSet = new Set<string>();

    filtered.forEach(vehicle => {
      vehicle.colors.forEach(color => colorSet.add(color));
    });

    if (!brand) {
      dispatch({type: 'color', payload: ''});
    }

    setColors(Array.from(colorSet));
  }, [brand, dispatch, vehicles]);

  return (
    <Container>
      <Heading2>Filter by properties</Heading2>
      <FormControl
        id="vehicle-type"
        labelText="Vehicle"
        aria-label="Vehicle type"
        disabled={disabled}
        options={types}
        actionType="type"
        value={type || ''}
        placeholder="Filter by vehicle type"
      />

      <FormControl
        id="vehicle-brand"
        labelText="Brand"
        aria-label="Vehicle Brand"
        disabled={disabled || !type}
        options={brands}
        actionType="brand"
        value={brand || ''}
        placeholder="Filter by vehicle brand"
      />

      <FormControl
        id="vehicle-color"
        labelText="Color"
        aria-label="Vehicle Color"
        disabled={disabled || !type || !brand}
        options={colors}
        actionType="color"
        value={color || ''}
        placeholder="Filter by vehicle color"
      />

      <Button
        disabled={disabled || (!type && !brand && !color)}
        onClick={() => {
          dispatch({
            type: 'reset',
          });
        }}
      >
        Reset
      </Button>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1rem',
  minWidth: 200,
  rowGap: 20,
  '& label': {
    marginBottom: '0.25rem',
    display: 'block',
    fontSize: '1.2rem',
    fontFamily: 'Roboto',
  },
  '& h2': {
    margin: '0.5rem 0',
    textAlign: 'center',
    [mq('md') + '']: {
      textAlign: 'left',
      gridColumn: 'span 2',
    },
  },

  [mq('md') + '']: {
    height: 500,
    position: 'sticky',
    top: 0,
  },
});

export default React.memo(FilterActions);

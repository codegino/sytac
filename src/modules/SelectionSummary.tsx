import React, {FC} from 'react';
import styled from '@emotion/styled';
import Heading3 from '../components/typography/Heading3';
import Heading4 from '../components/typography/Heading4';
import {useFilterState} from '../state/filter-state';
import {capitalize} from '../utils/capitalize';

const SelectionSummary: FC = () => {
  const {type, color, brand} = useFilterState();
  return type || color || brand ? (
    <Container>
      <Heading3>Selection:</Heading3>
      {type && (
        <Heading4>
          <b>Type:</b> {capitalize(type)}
        </Heading4>
      )}
      {brand && (
        <Heading4>
          <b>Brand:</b> {brand}
        </Heading4>
      )}
      {color && (
        <Heading4>
          <b>Color:</b> {capitalize(color)}
        </Heading4>
      )}
    </Container>
  ) : null;
};

const Container = styled.section({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '2px solid var(--color-primary-dark)',
  paddingTop: '0.5rem',
  marginTop: '1rem',
  '& h3': {
    marginBottom: '0.5rem',
  },
  '& h4': {
    marginBottom: '0.25rem',
    marginLeft: '0.4rem',
  },
  '& .color': {
    marginLeft: 5,
    display: 'inline-block',
    height: 20,
    width: 20,
  },
  '& b': {
    fontSize: '0.85em',
  },
});

export default SelectionSummary;

import React, {FC} from 'react';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heading1 from '../components/typography/Heading1';
import type {Vehicle} from '../models/vehicle';
import ErrorBoundary from '../modules/ErrorBoundary';
import FilterActions from '../modules/FilterActions';
import VehiclesListView, {ListViewSkeleton} from '../modules/VehiclesListView';
import {fetchData} from '../services/promisify';
import {FilterProvider} from '../state/filter-state';
import {mq} from '../utils/media-query';

const Home: FC = () => {
  const [vehicles, setVehicles] = React.useState<Vehicle[]>([]);
  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    setError('');
    fetchData()
      .then(data => {
        setVehicles(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <FilterProvider>
      <Header />
      <LayoutWrapper>
        <Heading1>Check our products</Heading1>
        <FilterActions disabled={loading} vehicles={vehicles} />

        <ErrorBoundary>
          {loading ? (
            <ListViewSkeleton />
          ) : (
            <VehiclesListView vehicles={vehicles} error={error} />
          )}
        </ErrorBoundary>
      </LayoutWrapper>
      <Footer />
    </FilterProvider>
  );
};

const LayoutWrapper = styled.div({
  minHeight: '100vh',
  display: 'grid',
  rowGap: 20,
  justifyContent: 'center',
  // Not necessary, but it's nice to at least use grid
  gridTemplateColumns: '1fr',
  [mq('md')]: {
    columnGap: 50,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  position: 'relative',
  padding: '0 3%',
  marginBottom: '3rem',
  '& h1': {
    gridColumn: 'span 1',
    textAlign: 'center',
    [mq('md') + '']: {
      gridColumn: 'span 2',
      textAlign: 'left',
    },
  },
});

export default Home;

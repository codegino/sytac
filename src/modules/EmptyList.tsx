import React, {FC} from 'react';
import styled from '@emotion/styled';
import _EmptyImage from '../icons/car-stop.svg';

const EmptyList: FC = () => (
  <Container role="alert" aria-label="No results found">
    <section className="content">
      <h2>I hit the end of the road and found nothing...</h2>
    </section>
    <EmptyListIcon src={_EmptyImage} />
  </Container>
);

// Another way to use emotion which resembles vanilla CSS
const Container = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 40rem;
  min-width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    background-color: #fff;
    width: 100%;
    text-align: center;
  }

  h2 {
    padding: 0 0.5rem;
  }
`;

const EmptyListIcon = styled.img({
  width: '60%',
  backgroundColor: '#ffffff',
});

export default EmptyList;

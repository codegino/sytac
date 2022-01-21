import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const Heading2: FunctionComponent<JSX.IntrinsicElements['h1']> = props => {
  return <Element {...props} />;
};

const Element = styled.h2({
  margin: 0,
  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: 18,
  lineHeight: '21px',
});

export default Heading2;

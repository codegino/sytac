import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const Heading4: FunctionComponent<JSX.IntrinsicElements['h4']> = props => {
  return <Element {...props} />;
};

const Element = styled.h4({
  fontFamily: 'Roboto',
  fontWeight: 400,
  margin: 0,
  fontSize: 18,
  lineHeight: '19px',
});

export default Heading4;

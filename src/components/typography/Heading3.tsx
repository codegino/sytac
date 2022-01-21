import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const Heading3: FunctionComponent<JSX.IntrinsicElements['h3']> = props => {
  return <Element {...props} />;
};

const Element = styled.h3({
  fontFamily: 'Roboto',
  fontWeight: 400,
  margin: 0,
  fontSize: 20,
  lineHeight: '21px',
});

export default Heading3;

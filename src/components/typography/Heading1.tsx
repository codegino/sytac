import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {mq} from '../../utils/media-query';

const Heading1: FunctionComponent<JSX.IntrinsicElements['h1']> = props => {
  return <Element {...props} />;
};

const Element = styled.h1({
  fontWeight: 400,
  fontSize: 24,
  fontFamily: 'Roboto',
  lineHeight: '28.15px',
  margin: '12px 0',
  [mq('sm')]: {
    fontSize: 48,
    lineHeight: '56.3px',
    margin: '24px 0',
  },
});

export default Heading1;

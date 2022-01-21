import React, {FC} from 'react';
import styled from '@emotion/styled';

type Props = React.HTMLProps<HTMLSelectElement> & {
  placeholder?: string;
  placeholderDisabled?: boolean;
};
export type Ref = HTMLSelectElement;

const Select = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <Element {...props} ref={ref} tabIndex={0}>
      <option value="" disabled={props.placeholderDisabled}>
        {props.placeholder}
      </option>
      {props.children}
    </Element>
  );
});

Select.displayName = 'Select';

type SelectValue = Pick<React.HTMLProps<HTMLSelectElement>, 'value'>;

const Element = styled.select<SelectValue>(props => ({
  width: '100%',
  height: 48,
  paddingLeft: 10,
  border: '1px solid rgba(25, 0, 65, 0.08)',
  borderRadius: 8,
  boxShadow: '0px 4px 4px rgba(25, 0, 65, 0.04)',
  borderRight: '18px solid #FFFFFF',
  backgroundColor: '#FFFFFF',
  outlineColor: '#EEEEEE',
  color: props.value ? '#000000' : '#222222',
  fontStyle: props.value ? 'normal' : 'italic',
  '&:disabled': {
    cursor: 'not-allowed',
  },
})) as FC<Props>;

export default Select;

import React, {FC} from 'react';
import Select from '../components/elements/Select';
import {useFilterState} from '../state/filter-state';
import {capitalize} from '../utils/capitalize';

const FormControl: FC<
  {
    options: string[];
    actionType: 'type' | 'color' | 'brand';
    labelText: string;
  } & Pick<
    React.HTMLProps<HTMLSelectElement>,
    'id' | 'aria-label' | 'disabled' | 'placeholder' | 'value'
  >
> = ({options, labelText, actionType, ...props}) => {
  const {dispatch} = useFilterState();

  return (
    <div>
      <label htmlFor={props.id}>{labelText}</label>
      <Select
        {...props}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch({
            type: actionType,
            payload: e.target.value,
          })
        }
      >
        {options.map(opt => (
          <option key={opt} value={opt} tabIndex={0}>
            {capitalize(opt)}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default FormControl;

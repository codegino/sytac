import React, {createContext, useContext, useReducer} from 'react';
import type {FunctionComponent} from 'react';

// Mini state management utility

type StateType = {
  type: string;
  brand: string;
  color: string;
};

type DispatchType =
  | {type: 'type'; payload: string}
  | {type: 'brand'; payload: string}
  | {type: 'color'; payload: string}
  | {type: 'reset'};

type ActionState = {
  dispatch: React.Dispatch<DispatchType>;
  state: StateType;
};

export const FilterContext = createContext<ActionState>(
  null as unknown as ActionState,
);

export const FilterProvider: FunctionComponent = ({children}) => {
  const [state, dispatch] = useReducer(stateReducer, {
    type: '',
    color: '',
    brand: '',
  });

  return (
    <FilterContext.Provider value={{dispatch, state}}>
      {children}
    </FilterContext.Provider>
  );
};

export const stateReducer = (
  state: StateType,
  action: DispatchType,
): StateType => {
  switch (action.type) {
    case 'brand':
      return {...state, brand: action.payload};
    case 'type':
      return {...state, type: action.payload};
    case 'color':
      return {...state, color: action.payload};
    case 'reset':
      return {
        type: '',
        brand: '',
        color: '',
      };
    // Default is not needed since there's no way it will be called
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFilterState = () => {
  const {state, dispatch} = useContext(FilterContext) as {
    state: StateType;
    dispatch: React.Dispatch<DispatchType>;
  };

  const {brand, color, type} = state;

  return {
    brand,
    color,
    type,
    dispatch,
  };
};

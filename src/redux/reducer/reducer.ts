import {ActionType} from "../action/action";

const initialState: StateType = {
  action: '',
  value: 0
}

export const reducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'sum':
      return state
    case 'subtract':
      return state
    case 'multiply':
      return state
    case 'divide':
      return state
    case 'percent':
      return state
    default:
      return state
  }
};


//types
interface StateType {
  action: string;
  value: number;
}


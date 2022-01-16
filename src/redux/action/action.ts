export const sumAction = () => ({
  type: 'sum',
});

export const subtractAction = () => ({
  type: 'subtract',
});

export const multiplyAction = () => ({
  type: 'multiply',
});

export const divideAction = () => ({
  type: 'divide',
});

export const percentAction = () => ({
  type: 'percent',
});

//types
export type ActionType =
    ReturnType<typeof sumAction>
    | ReturnType<typeof subtractAction>
    | ReturnType<typeof multiplyAction>
    | ReturnType<typeof divideAction>
    | ReturnType<typeof percentAction>
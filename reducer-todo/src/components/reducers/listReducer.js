export const initialState = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state);
      return [
        ...state,
        {
          task: action.payload,
          id: Date.now(),
          completed: false
        }
      ];
    default:
      return state;
  }
};

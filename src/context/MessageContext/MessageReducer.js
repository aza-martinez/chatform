const MessageReducer = (state, action) => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

export default MessageReducer;

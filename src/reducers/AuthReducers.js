const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
      return state;
  }
};

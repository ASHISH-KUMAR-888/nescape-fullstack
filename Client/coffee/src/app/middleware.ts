import axios from "../api/axiosInstance";

const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type !== "api/call") return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  store.dispatch({ type: onStart });

  try {
    next(action);

    const response = await axios({ url, method, data });
    store.dispatch({ type: onSuccess, payload: response.data }); // Send the actual data
  } catch (error) {
    store.dispatch({ type: onError, payload: error.message || error });
    console.log(error);
  }
};

export default apiMiddleware;

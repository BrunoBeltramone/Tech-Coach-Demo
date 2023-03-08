const initialState = {
  cryptocurrencies: [],
  selectedCrypto: "",
  cryptoDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CRYPTO":
      return {
        ...state,
        cryptocurrencies: action.payload,
      };

    case "GET_ONE_CRYPTO":
      return {
        ...state,
        cryptoDetail: action.payload,
      };
    default:
      return state;
  }
}

import axios from "axios"

export function getAllCrypto() {
    return async function (dispatch) {
      try {
        var info = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD"
        );
        return dispatch({
          type: "GET_ALL_CRYPTO",
          payload: info.data.coins,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function getOneCrypto(selectedCrypto) {
    return async function (dispatch) {
      try {
        var info = await axios.get(
          `https://api.coinstats.app/public/v1/coins/${selectedCrypto}?currency=USD`
        );
        return dispatch({
          type: "GET_ONE_CRYPTO",
          payload: info.data.coin,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
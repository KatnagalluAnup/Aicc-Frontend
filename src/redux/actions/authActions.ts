// import { useN } from "react-router-dom";
import { http } from "../../http-service";
import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes";

export const authenticate = (action: any) => (dispatch: any) => {
  console.log("here");
  http()
    .post("/auth", action)
    .then((response) => {
        if (response.status === 200) {
          const {
            data: { jwtToken },
          } = response;
          localStorage.setItem("access_token", jwtToken);
          dispatch({ type: AUTHENTICATE, payload: JSON.stringify(jwtToken) });
        }
      console.log(response);
    })
    .catch((err) => console.log(err));
};

// gets the token from the Token and saves it in the store
// export const reauthenticate = (token: any) => {
//   return (dispatch: any) => {
//     dispatch({ type: AUTHENTICATE, payload: token });
//   };
// };

// removing the token
export const deauthenticate = () => {
  return (dispatch: any) => {
    localStorage.removeItem("access_token");
    dispatch({ type: DEAUTHENTICATE });
  };
};

import { Dispatch } from "react";
import { getUserProfile } from "../../services/api";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const response = await getUserProfile();
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "Ошибка загрузки пользователя",
      });
    }
  };
};

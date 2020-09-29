import { initialState } from "store/app/reducer";

const VISIBLE_LOGIN = 'visible_login';

export const setVisibleLogin = (visible) => ({type: VISIBLE_LOGIN, visible});

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case VISIBLE_LOGIN:
      return {...state, visible: !action.visible};
    
    default:
      return state;
  }
}

import { NavigationActions } from 'react-navigation';
import MainStackNavigator from './routes';
import { userType } from '../../Redux/user';

const initialState = MainStackNavigator.router.getStateForAction(NavigationActions.init());
const loginState = MainStackNavigator.router
  .getStateForAction(MainStackNavigator.router.getActionForPathAndParams('Login'));

export default (state = initialState, action) => {
  let nextState = MainStackNavigator.router.getStateForAction(action, state);
  const afterLoginSuccessRouteName = "Home"
  switch (action.type) {
  case userType.LOGIN_SUCCESS:
    nextState = MainStackNavigator.router.getStateForAction(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: afterLoginSuccessRouteName })],
    })); break;
  }

  return nextState || state;
};

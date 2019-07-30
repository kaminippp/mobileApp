import { NavigationActions } from 'react-navigation';
import { store } from '../App';

const navigateToEditLiftProduct = (index, liftId) =>
  navigateToScreen('EditLiftProductScreen', {
    productIndex: index,
    liftId,
  });

const navigateToEditDropProduct = (index, dropId, productId) =>
  navigateToScreen('EditDropProductScreen', {
    productIndex: index,
    dropId,
    productId,
  });

const navigateBack = () => {
  store.dispatch(NavigationActions.back());
};

const navigateLogin = () => store.dispatch(NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
}));

const navigateToSetPassword = (code) => {
  store.dispatch(NavigationActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
      NavigationActions.navigate({ routeName: 'SetPassword', params: { code } }),
    ],
  }));
};

const navigateToScreen = (routeName, params) => store.dispatch(NavigationActions.navigate({ routeName, params }));

const resetToScreen = (routeName, params) => store.dispatch(NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName, params })],
}));

export default {
  navigateToEditLiftProduct,
  navigateToEditDropProduct,
  navigateBack,
  navigateLogin,
  navigateToSetPassword,
  navigateToScreen,
  resetToScreen,
};


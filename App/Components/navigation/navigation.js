import { connect } from 'react-redux';
import React from 'react';
// import { addNavigationHelpers } from 'react-navigation';

import MainStackNavigator from './routes';

const NavApp = ({ dispatch, nav }) =>
  (
    <MainStackNavigator
      navigation={{
        dispatch,
        state: nav,
      }}
    />
  )
;

const mapStateToProps = state => ({
  nav: state.nav,
});

export const Navigation = connect(mapStateToProps)(NavApp);

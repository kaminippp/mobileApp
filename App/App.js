import React, {Component} from 'react'
import {Provider} from 'react-redux'
import HomeScreen from './Components/ArticleList/ArticleListContainer'
import createStore from './Redux'
import NavigatorComponent from "./Components/StackNavigatorComponent";
import {NetInfo, Text, View} from "react-native";

import store from './store';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected : true
        }
    }
    componentWillMount(): void {
        // NetInfo.isConnected.fetch().then(isConnected => {
        //     console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        // });
        // NetInfo.isConnected.addEventListener(
        //     'connectionChange',
        //     (isConnected) => {
        //         this.setState({
        //             isConnected
        //         })
        //     }
        // );
    }

    render() {
        console.log("----------------------------------------------------------------------")
        console.log(this.props)
        return (
            <Provider store={store}>
                <React.Fragment>
                {!this.state.isConnected?<View style={{backgroundColor: 'red', height: 30, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        You are offline
                    </Text>
                </View>:null}
                <NavigatorComponent
                    // screenProps={{
                    //     // navigationObject: this.props.navigation,
                    //     isConnected: this.state.isConnected
                    // }}
                />
                </React.Fragment>
            </Provider>
        )
    }
}

export default App


// import React, { PureComponent } from 'react';
// import { Linking, ActivityIndicator, NetInfo } from 'react-native';
// import { Provider } from 'react-redux';
// import createStore from './Redux';
// import StartupActions from './Redux/startup';
// import UserActions from './Redux/User';
// // import NetworkActions from './redux/network';
// import { Navigation, handleDeepLink } from './navigation/navigation';
// // import StatusBar from './components/StatusBar';
// // import View from './components/View';
// import {View} from 'react-native';
// import Utils from './Utils/utils';
//
// export const store = createStore();
//
// class App extends PureComponent {
//     state = {
//         restoring: true,
//     }
//
//     componentWillMount() {
//         Utils.restoreStorePart('user')
//             .then(user => store.dispatch(UserActions.loginSuccess(user)))
//             .finally(() => this.setState({ restoring: false }));
//     }
//
//     componentDidMount() {
//         Linking.getInitialURL().then(url => url && handleDeepLink(url));
//         Linking.addEventListener('url', this.handleURL);
//         NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
//         store.dispatch(StartupActions.startup());
//     }
//
//     componentWillUnmount() {
//         Linking.removeEventListener('url', this.handleURL);
//         NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
//     }
//
//     handleConnectivityChange = (connected) => {
//         store.dispatch(NetworkActions.connectionChanged(connected));
//     }
//
//     handleURL = ({ url }) => handleDeepLink(url)
//
//     render() {
//         if (this.state.restoring) {
//             return <ActivityIndicator />;
//         }
//
//         return (
//             <Provider store={store}>
//                 <View style={{ flex: 1 }}>
//                     <Navigation />
//                 </View>
//             </Provider>
//         );
//     }
// }
//
// export default App;

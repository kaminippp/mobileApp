import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App/App';
console.disableYellowBox = true;
// const errorHandler = (e, isFatal) => {
//     if (isFatal) {
//         Alert.alert('Oops, Something went wrong', 'please contact support@tenoapp.com' );
//     } else {
//         console.log(e); // So that we can see it in the ADB logs in case of Android if needed
//     }
// };

AppRegistry.registerComponent('mobileApp', () => App);

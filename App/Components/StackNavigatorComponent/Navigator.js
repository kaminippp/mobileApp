import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import ArticleListComponent from "../ArticleList";
import ArticleDetailComponent from "../ArticleDetails";

let screensObj;
screensObj = {
    ArticleLists: {
        screen: ArticleListComponent,
        navigationOptions: {
            header: null,
        },
    }, ActiveArticleList: {
        screen: ArticleDetailComponent,
        navigationOptions: {
            header: null,
        },
    },
};
const Screens = createStackNavigator(screensObj,
    {
        headerMode: 'screen'
    });
const ScreensContainer = createAppContainer(Screens);
export default class Navigator extends Component {
    render() {
        console.disableYellowBox = true;
        return (<ScreensContainer
                screenProps={{}}
            />
        );
    }
}

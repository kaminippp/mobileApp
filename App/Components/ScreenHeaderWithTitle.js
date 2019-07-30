import React, {Component} from 'react';
import {NetInfo, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {View, Text} from 'react-native';

import Colors from '../Themes/colors';

const styles = StyleSheet.create({
    TextStyle: {
        color: Colors.titleColor,
        // fontFamily: Fonts.mainFont.fontFamily,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.DefaultBlue,
        zIndex: 2,
    },
    HeaderShadow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 30,
        backgroundColor: Colors.DefaultBlue,
        zIndex: 2,
        shadowColor: Colors.cardShadowColor,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
    },
    HeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ScreenTitleText: {
        // ...Fonts.mainFont,
        color: Colors.defaultBackground,
        fontSize: 18,
        lineHeight: 39,
        fontWeight: 'bold',
    },
});

class ScreenHeaderWithTitle extends Component {
    static propTypes = {
        shadow: PropTypes.bool,
        title: PropTypes.string,
    }
    static defaultProps = {
        shadow: false,
        title: '',
    }

    constructor(props) {
        super(props);

    }

    render() {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is>>>>>>>>>>>>>>>>> ' + (isConnected ? 'online' : 'offline'));
        });
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (isConnected) => {
                this.setState({
                    isConnected
                })
            }
        );
        console.log(this.props);
        const {title, headerLeft, headerRight, shadow} = this.props;
        const headerStyle = shadow ? styles.HeaderShadow : styles.HeaderShadow;
        return (
            <View colors={[Colors.DefaultBlue, Colors.DefaultBlue, Colors.DefaultBlue]}
                            style={headerStyle}>
                {headerLeft && <View style={styles.HeaderRight}>{headerLeft}</View>}
                <Text
                    style={[styles.TextStyle, styles.ScreenTitleText]}
                    testID={`${this.props.testIdPrefix}HeaderTitle`}
                    numberOfLines={1} and ellipsizeMode="tail"
                >
                    {title.toUpperCase()}
                </Text>
                {headerRight && <View style={styles.HeaderRight}>{headerRight}</View>}
            </View>
        );
    }
}

export default ScreenHeaderWithTitle;

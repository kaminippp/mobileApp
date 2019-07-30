import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import ScreenHeaderWithTitle from "../ScreenHeaderWithTitle";
import {Images} from '../../Themes'
import styles from "../ArticleList/style";

class ArticleDetails extends Component {
    render() {
        const details = this.props.navigation.state.params.data;
        return (
            <View>
                <ScreenHeaderWithTitle
                    title={details.title}
                    testIdPrefix="profile"
                    headerLeft={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={Images.backGrayIcon}
                            style={{width: 20, height: 20}}
                        />
                    </TouchableOpacity>}
                    headerRight={<Text
                        style={{paddingLeft: -30, lineHeight: 34, color: 'white', fontSize: 30, fontWeight: 'bold'}}
                    ></Text>}
                />
                <View style={{flexDirection: 'column', justifyContent: 'space-between', margin: 10}}>
                    <Text style={[styles.label]} numberOfLines={2} and ellipsizeMode="tail">
                        {"TITLE: " + (details.title)}
                    </Text>

                    <Text style={[styles.label, {marginTop: 10}]} numberOfLines={2} and ellipsizeMode="tail">
                        {"URL: " + (details.url)}
                    </Text>

                    <Text style={[styles.label, {marginTop: 10}]} numberOfLines={2} and ellipsizeMode="tail">
                        {"ABSTRACT: " + (details.abstract)}
                    </Text>
                    <Text style={[styles.label, {marginTop: 10}]} numberOfLines={2} and ellipsizeMode="tail">
                        {"SECTION: " + (details.section)}
                    </Text>
                    <Text style={[styles.subLabel, {marginTop: 10}]} numberOfLines={1} and ellipsizeMode="tail">
                        {details.byline}
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[styles.subLabel]}>
                            {(details.section)}
                        </Text>
                        <Text style={styles.subLabel}>
                            {details.published_date}
                        </Text>
                    </View>
                    <View>
                    </View>
                </View>

            </View>
        );
    }
}

export default ArticleDetails;
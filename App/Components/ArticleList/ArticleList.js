import React from 'react'
import {View, Text} from 'react-native'
import styles from './style'

const ArticleList = (details) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fafafa'
        }}>
            <View style={[{
                width: '90%',
                margin: 10,
                padding: 5,
                flexDirection: 'column',
                borderColor: 'gray', borderBottomWidth: 0.5,

            }]}>
                <View style={{margin: 10, width: '80%', flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#9a9a9a', height: 50, width: 50, borderRadius: 25}}/>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Text style={[styles.label]} numberOfLines={2} and ellipsizeMode="tail">
                            {(details.title)}
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
            </View>
        </View>);
};

export default ArticleList;
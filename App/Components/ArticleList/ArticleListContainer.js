import React, {Component} from 'react'
import {View, Text, Image, ListView, AsyncStorage, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import styles from './style'
import ArticleListComponent from './ArticleList'
import ArticleListAction from '../../Redux/ArticleListReducer'
import {Images} from '../../Themes'
import ScreenHeaderWithTitle from "../ScreenHeaderWithTitle";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ArticleListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: ds.cloneWithRows(this.props.ArticleList.ArticleList)
        }
    }

    renderRow(details) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.push('ActiveArticleList', {
                data : details
            })}>
                <ArticleListComponent {...details} />
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.props.getAllArticleList();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.ArticleList.ArticleList !== nextProps.ArticleList.ArticleList) {
            this.setState({
                ds: ds.cloneWithRows(nextProps.ArticleList.ArticleList)
            })
        }
    }

    render() {
        const IS_LOADING = this.props.ArticleList.fetching === true;
        const HAS_ERROR = this.props.ArticleList.error === true;
        return (
            <View style={styles.container}>
                <ScreenHeaderWithTitle
                    title={"NY Times Most Popular"}
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
                {HAS_ERROR && <Text style={styles.infoMessage}>Error fetching data</Text>}
                {IS_LOADING &&
                <Text style={styles.infoMessage}>Fetching Articles ...</Text>}
                {!IS_LOADING && !HAS_ERROR ?
                    <ListView contentContainerStyle={styles.gridCocktails}
                              dataSource={this.state.ds}
                              renderRow={(rowData) => this.renderRow(rowData)}
                    />
                    : null

                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ArticleList: state.ArticleList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllArticleList: () => dispatch(ArticleListAction.getArticleListRequest()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)

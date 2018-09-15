import React, { Component } from 'react';
import {
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
/* import {
  TextBar,
  CustomButton,
  LoadingBar,
  BlankScreen,
  ThemedContainer,
} from '../index'; */
import { TextBar } from '../TextBar';
import { CustomButton } from '../CustomButton';
import { LoadingBar } from '../LoadingBar';
import { BlankScreen } from '../BlankScreen';
import { ThemedContainer } from '../ThemedContainer';

import styles from './styles';

class PaginatedList extends Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    keyExtractorExt: PropTypes.string,
    keyExtractorName: PropTypes.string,
    onRenderItem: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    title: PropTypes.string,
    horizontal: PropTypes.bool,
    showsHorizontalScrollIndicator: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  static defaultProps = {
    keyExtractorExt: null,
    keyExtractorName: 'id',
    title: '',
    horizontal: false,
    showsHorizontalScrollIndicator: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      hasReachedEnd: false,
      refreshing: false,
      loadingMore: false,
      loadMoreFailed: false,
    };
  }

  componentDidMount() {
    this._onMount();
  }

  setLoadingScreen = (/* show, msg */) => {
  }

  setMessageBox = (/* show, type, msg, param */) => {
  }

  displayLoadMoreFailedMsg = (msg = null) => {
    const strMsg = !msg ? 'Unable to load' : msg;
    Alert.alert(
      "Sorry, We're Having Some Issues",
      strMsg,
      [
        { text: 'OK', onPress: () => {} },
      ],
      { cancelable: false },
    );
  }

  _renderFooter = () => {
    const {
      hasReachedEnd,
      loadingMore,
      loadMoreFailed,
    } = this.state;

    let oFooter = null;

    if (hasReachedEnd) {
      oFooter = <TextBar title="End of Results" />;
    } else if (loadMoreFailed) {
      oFooter = <CustomButton title="See more" onPress={this._onSeeMore} />;
    } else if (loadingMore) {
      oFooter = <LoadingBar size="small" color="#EEB843" />;
    } else {
      oFooter = null;
    }
    return oFooter;
  }

  _keyExtractor = (item) => {
    const { keyExtractorExt, keyExtractorName } = this.props;
    if (keyExtractorExt) {
      return `${item[keyExtractorName]}  _ ${item[keyExtractorExt]}`;
    }
    return item[keyExtractorName];
  }

  _onRenderItem = (item) => {
    const { onRenderItem } = this.props;
    onRenderItem(item);
  }

  _displayLoadMoreFailedMsg = (msg = null) => {
    this.oCompList.displayLoadMoreFailedMsg(msg);
  }

  _loadMoreFromDB = async () => {
    const {
      data,
      pageName,
      pageOnFirstLevel,
      onLoadMore,
    } = this.props;
    const _pageName = pageName || 'pages';
    const _pageOnFirstLevel = pageOnFirstLevel || false;
    if (data[_pageName] !== 1) {
      const { page } = this.state;
      const targetPage = page + 1;
      const oRes = await onLoadMore(targetPage);
      if (oRes.flagno === 1) {
        this.setState({
          page: targetPage,
          loadMoreFailed: false,
          loadingMore: false,
          refreshing: false,
          hasReachedEnd: targetPage === (
            _pageOnFirstLevel ? oRes[_pageName] : oRes.data[_pageName]
          ),
        });
      } else {
        this._displayLoadMoreFailedMsg(oRes.message);
        this.setState({ loadMoreFailed: true });
      }
    } else {
      this.setState({
        loadingMore: false,
        hasReachedEnd: true,
      });
    }
  };

  _handleLoadMore = () => {
    const {
      loadMoreFailed,
      loadingMore,
      hasReachedEnd,
      refreshing,
    } = this.state;

    if (!loadingMore && !hasReachedEnd && !refreshing && !loadMoreFailed) {
      this.setState({
        loadingMore: true,
      }, () => this._loadMoreFromDB());
    }
  };

  _onSeeMore = () => {
    this.setState({
      loadMoreFailed: false,
      loadingMore: true,
    }, () => {
      this._loadMoreFromDB();
    });
  };

  _onRefresh = async () => {
    const { onRefresh } = this.props;
    this.setState({ refreshing: true });
    const oRes = await onRefresh();

    if (oRes.flagno === 1) {
      this.setState({
        refreshing: false,
        page: 1,
        hasReachedEnd: false,
      });
      this._showToast('List Successfully Updated');
    } else {
      this.setState({ refreshing: false });
      this._showToast(`${(oRes.message || 'An Unknown Error was encountered')} . Check your internet connection and try again.`);
    }
  };

  _onMount = () => {
    const { onMount } = this.props;
    onMount();
  };

  _showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.BOTTOM);
  }

  render() {
    const {
      data,
      title,
      renderItem,
      horizontal,
      showsHorizontalScrollIndicator,
    } = this.props;

    const {
      refreshing,
      loadingMore,
    } = this.state;

    const oView = data.length < 1 ? (
      <BlankScreen title="No data" />
    ) : (
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        refreshing={refreshing}
        onRefresh={this._onRefresh}
        contentContainerStyle={styles.reportsFlatlist}
        ref={(ref) => { this.flatListRef = ref; }}
        extraData={loadingMore || data}
        keyExtractor={this._keyExtractor}
        data={data}
        onEndReached={this._onEndReached}
        ListFooterComponent={this._renderFooter}
        renderItem={({ item }) => renderItem(item)}
      />
    );

    return (
      <ThemedContainer
        title={title}
        onRefresh={this._onRefresh}
      >
        { oView }
      </ThemedContainer>
    );
  }
}

export { PaginatedList };

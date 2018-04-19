import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as AlbumsActions } from 'store/ducks/albums';
import Loading from 'components/Loading';
import AlbumItem from './components/AlbumItem';
import styles from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Minha Biblioteca',
    headerRight: (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate('Search')}
      >
        <Icon name="search" size={24} color="#fff" />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    console.tron.log(this.props);

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {
          this.props.albums.loading
          ? <Loading />
          : <FlatList
            data={this.props.albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => <AlbumItem onPress={() => this.props.navigation.navigate('Album', { album: item })} album={item} />}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

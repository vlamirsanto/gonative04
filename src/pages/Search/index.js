import React, { Component } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as SearchActions } from 'store/ducks/search';
import SongItem from 'components/SongItem';
import styles from './styles';

class Search extends Component {
  static propTypes = {
    search: PropTypes.shape({
      songs: PropTypes.arrayOf(PropTypes.shape),
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Buscar',
  }

  state = {
    searchInput: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas"
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            onChangeText={() => {}}
          />
        </View>

        <FlatList
          data={this.props.search.songs}
          keyExtractor={song => String(song.id)}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

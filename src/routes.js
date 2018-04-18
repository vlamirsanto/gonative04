import { StackNavigator } from 'react-navigation';

import colors from 'styles/colors';

import Main from 'pages/Main';
import Search from 'pages/Search';
import Album from 'pages/Album';

const Routes = StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.secundary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
  },
});

export default Routes;


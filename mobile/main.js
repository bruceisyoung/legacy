// import packages
import React from 'react';
import { Navigator } from 'react-native';
import Exponent from 'exponent';

// import components
import NavBar from './app/NavBar';
import Login from './app/Login';

// main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      token: null,
      mealList: [],
      searchRecipes: [],
      shoppingList: [],
    };
    this.getMealList = this.getMealList.bind(this);
    this.getToken = this.getToken.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.getSearchRecipes = this.getSearchRecipes.bind(this);

    this.updateMealList = this.updateMealList.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    this.updateSearchRecipes = this.updateSearchRecipes.bind(this);
    this.renderScene = this.renderScene.bind(this);
  } // end constructor

  // setup initial app state
  getMealList() { return this.state.mealList; }
  getToken() { return this.state.token; }
  getUserId() { return this.state.userId; }
  getSearchRecipes() { return this.state.searchRecipes; }

  updateMealList(mealList) { this.setState({ mealList }); }
  updateToken(token) { this.setState({ token }); }
  updateUserId(userId) { this.setState({ userId }); }
  updateSearchRecipes(searchRecipes) { this.setState({ searchRecipes }); }

  //import the fonts for IOS system
  componentDidMount() {
    Exponent.Font.loadAsync({
      HelveticaNeue: require('./assets/HelveticaNeue.ttf'),
      Entypo: require('./node_modules/react-native-vector-icons/Fonts/Entypo.ttf'),
      Ionicons: require('./node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'),
    })
  } // end componentDidMount
  
  // establish navigation
  renderScene(route, navigator) {
    return (
      <route.component
        {...route.passProps}
        navigator={navigator}
        getMealList={this.getMealList}
        getToken={this.getToken}
        getUserId={this.getUserId}
        getSearchRecipes={this.getSearchRecipes}
        updateMealList={this.updateMealList}
        updateToken={this.updateToken}
        updateUserId={this.updateUserId}
        updateSearchRecipes={this.updateSearchRecipes}
      />
    );
  } // end renderScene

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Login', component: Login }}
        renderScene={this.renderScene}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        navigationBar={<NavBar navigator={this.navigator} />}
      />
    );
  }
} // end render

Exponent.registerRootComponent(App);

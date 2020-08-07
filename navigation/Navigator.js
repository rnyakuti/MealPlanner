import React from 'react';
import { Platform, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../pages/HomePage';
import FeedbackPage from '../pages/Feedback';
import GroceryListPage from '../pages/GroceryList';
import PlannerPage from '../pages/Planner';
import  RecipesPage from '../pages/Recipes';
import Colors from '../constants/Colors';
import RecipeDatailPage from '../pages/RecipeDatailPage';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const FeedbackNavigator = createStackNavigator(
  {
    Feedback: {
      screen: FeedbackPage,
      navigationOptions: {
        title: 'Feedback Page'
      }
    },
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const GroceriesListNavigator = createStackNavigator(
  {
    GroceryList: {
      screen: GroceryListPage,
      navigationOptions: {
        title: 'Grocery List'
      }
    },
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const PlannerNavigator = createStackNavigator(
  {
    Planner: {
      screen: PlannerPage,
      navigationOptions: {
        title: 'Your Planner'
      }
    },
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const RecipesNavigator = createStackNavigator(
  {
    Recipes: {
      screen: RecipesPage,
      navigationOptions: {
        title: 'Recipes'
      }
    },
    RecipeDetail : RecipeDatailPage
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator(
  {

    Recipes: {
      screen: RecipesNavigator,
      navigationOptions: {
        title: 'Recipes'
      }
    },
    GroceryList: {
      screen: GroceriesListNavigator,
      navigationOptions: {
        title: 'Grocery List'
      }
    },
    Planner: {
      screen: PlannerNavigator,
      navigationOptions: {
        title: 'Your Planner'
      }
    },
    Feedback: {
      screen: FeedbackNavigator,
      navigationOptions: {
        title: 'Send Feedback'
      }
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);

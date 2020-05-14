import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile45155Navigator from '../features/UserProfile45155/navigator';
import Maps45151Navigator from '../features/Maps45151/navigator';
import Add-Item45147Navigator from '../features/Add-Item45147/navigator';
import Maps45146Navigator from '../features/Maps45146/navigator';
import UserProfile45100Navigator from '../features/UserProfile45100/navigator';
import Maps45096Navigator from '../features/Maps45096/navigator';
import Add-Item45092Navigator from '../features/Add-Item45092/navigator';
import Maps45091Navigator from '../features/Maps45091/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile45155: { screen: UserProfile45155Navigator },
Maps45151: { screen: Maps45151Navigator },
Add-Item45147: { screen: Add-Item45147Navigator },
Maps45146: { screen: Maps45146Navigator },
UserProfile45100: { screen: UserProfile45100Navigator },
Maps45096: { screen: Maps45096Navigator },
Add-Item45092: { screen: Add-Item45092Navigator },
Maps45091: { screen: Maps45091Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

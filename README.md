# ApplicNation

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

expo.io

## Setting up

## Problems

- Node V17 does not work, you get a error 500 and mentions a problem with the metro package. Using node version 16.10.0 fixed this problem
- `import { createStackNavigator } from '@react-navigation/stack';` doen't seem to work I get some UI error. use `import { createNativeStackNavigator } from '@react-navigation/native-stack';` instead
- When installing react-native-vector-icons, make sure the program isn't running. It gets stuck when you do that. stopiing the program and then installing should fix the issue
- When installing new modules or dependencies, do a hard re-build of the program. Don't always rely on hot-resets since they don't take into account the new dependencies
- Using the drawer module breaks the app, it seems to be missing a dependency? Keep these packages uninstalled or else they break. Avoid using this for now since it's too  much of a hastle to find a fix
- Sometimes node gets messed up and running the code won't work properly you can `taskkill -F -IM node.exe` to fix that (this also fixes when the new external terminal does not open up)
-  `npm start --reset-cache` to reset cache. may be useful at times.
- after applying modules, you should cd into android folder and `./gradlew clean`

## Important considerations

- For IOS fonts, you must use the original font name. Open up the .ttf or .otf file and you can see the font name at the top
- Use 'jest -u' as the test script because '-u' retakes snapshots for snapshot testing. may make the tests longer but it is worth it in the end to avoid unpassing tests for such silly reasons in future CI/CD

## Resources 

[React Docs](https://reactjs.org/docs/getting-started.html)<br>
[React Native Docs](https://reactnative.dev/docs/getting-started)<br>
[React Navigation Docs](https://reactnavigation.org/docs/getting-started)<br>
[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
    cd into android folder and `./gradlew clean` adter you applied the module to the android build.gradle 
[Font Awesome (for icons?)](https://fontawesome.com/v5.15/icons?d=gallery&p=2)<br>
[Async Storage (store stuff on devide UNENCRYPTED)](https://react-native-async-storage.github.io/async-storage/docs/install)<br>
[SQLite](https://sqlite.org/index.html)<br>
[SQLite Tutorial](https://sqlitetutorial.net/)<br>
[SQLite Browser](https://sqlitebrowser.org/)<br>
[Redux](https://redux.js.org/)  --> halfway through redux essentials, halfway through redux fundamentals<br>
[Firebase Console](https://firebase.google.com/docs)<br>
[mocki.io (for mock API's)](mocki.io)<br>
[Jest (for testing)](https://jestjs.io/)<br>
[Get images for different screen sizes](https://appicon.co/)<br>
[Babel](https://babeljs.io/docs/en/)<br>
[ES6](https://github.com/lukehoban/es6features#readme)<br>
[Prettier](https://prettier.io/docs/en/index.html)<br>
[Editor Config](https://editorconfig.org/#example-file)<br>
[ESLint](https://eslint.org/docs/user-guide/getting-started)<br>
[Metro](https://facebook.github.io/metro/docs/getting-started)<br>
[Flow](https://flow.org/en/docs/getting-started/)<br>
[Watchman](https://facebook.github.io/watchman/docs/install.html)<br>
[Yarn](https://classic.yarnpkg.com/en/docs/getting-started)<br>


## History 

- [Tutorial](https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PLRA1qF15wh8Q4X7NxOKzGTtipl29NQSGt&index=10)
- I created Assets folder
- I created react-native.config.js and added assets
- use `npx react-native link` to link assets <b>RUN THIS EVERYTIME YOU ADD A NEW FONT</b>
- using a js file for fonts
- Added notification settings to android xml
- added colors.xml to android/app/src/main/res/values
- Added notification settinfs to android/build.gradle
- added remote push notifications in android/build.gradle dependencies
- added firebase dependency to android/app/build.gradle
- applied google services plugin to android/app/build.gradle
- created firebase thing for app
- added camera permissions to androidmanifests.xml
- added defaultconfig to the andoid/app/build.gradle for camera
- added multiDexEnabled true to android/app/build.gradle. Need to find out what that does
- added .prettierignore file


## modules used

react-native-sqlite-storage -> SQLite
    @react-native-async-storage/async-storage -> Async storage
    @react-navigation/bottom-tabs -> botton tabs
    @react-navigation/material-bottom-tabs -> bottom material tabl
    @react-navigation/material-top-tabs -> top material tabs
    @react-navigation/native 
    @react-navigation/native-stack -> stack navigator
    @react-navigation/stack -> navigatio wherre each screen is placed on a stack
    react-native-screens -> used for navigation 
    react-native-safe-area-context -> used for navigation (handles safe area)
    react-native-vector-icons -> vector icons
    react-native-tab-view -> top tabs
    react-native-screens -> used for navigator
    react-native-paper -> follows material design guidlines
    react-native-pager-view -> swipe left and right through pages of data
    redux
    react-redux
    redux-thunk
    react-native-push-notification -> push notifications
    react-native-maps -> to use google maps
    react-native-camera -> to use cam
    react-native-camera-hooks -> cam hooks
    react-native-fs -> work with saved image files
    react-test-renderer -> used for testing


## other modules

react-native-checkbox

## For ME

const Stack = createNativeStackNavigator(); for screens
const Tab = createBottomTabNavigator(); for tabs
const Tab = createMaterialBottomTabNavigator(); for nicer tabs
const Tab = createMaterialTopTabNavigator(); for nicer top tabs
const Drawer = createDrawerNavigator(); for drawer


<View>
<Text>

<SectionList> //loads a few at once (sectionated)
<FlatList> //loads a few at once
<ScrollView> // loads all at once

<TextInput 
  style={styles.input}
  placeholder='e.g. John'
  onChangeText={(value) => setName(value)}
  secureTextEntry
/>

<Button 
  style={styles.button}
  title={submitted ? 'Clear' : 'Submit'}
  onPress={onPressHandler}
  color='#010'
/> 


<TouchableOpacity>

<TouchableHighlight
        underlayColor='#dddddd'
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight>




      <TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressHandler}
      >
        <View style={styles.button}> 
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
        </View>
      </TouchableWithoutFeedback> 



      <Pressable
      style={({pressed}) => [
        styles.button, 
        {backgroundColor: pressed ? '#dddddd' : '#00ff00' }
      ]}
      delayLongPress={2000}
      onLongPress={onPressHandler}>
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>




      Alert.alert('Warning', 'The name must be longer than 3 characters', [
        {text:'Do not show again', onPress:() => console.warn('Do not show again')},
        {text:'Cancel', onPress:() => console.warn('OK Cancel!')},
        {text:'OK', onPress:() => console.warn('OK Pressed!')}
      ], {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')} );
    }


ToastAndroid




<Modal
      visible={showWarning}
      transparent
      onRequestClose={() => setShowWarning(false)}
      animationType='fade'
    >
      <View style={styles.centerModal}> 
        <View style={styles.warningModal}> 
          <View style={styles.warningTitle}> 
            <Text style={styles.text}>WARNING!</Text>
          </View>
          
          <View style={styles.warningBody}> 
            <Text style={styles.text}>The name must be longer than 3 characters</Text>
          </View>

          <Pressable
            onPress={() => setShowWarning(false)}
            style={styles.warningOkBtn}
            android_ripple={{color: '#fff'}}
          >
            <Text style={styles.text}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

    <Image>
    <ImageBackground>

    route and route.params to pass parameters (probably uses deep links)


const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location:'default',
  },
  ()=>{},
  error=>{console.log(error)}
);
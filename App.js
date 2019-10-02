/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import codePush from "react-native-code-push";
// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
class MyApp extends Component<Props> {
  constructor(props) {
    super(props);
  }

  onButtonPress() {
        console.warn("onButtonPress");
        // console.warn(codePush);
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
  }


  render()
  {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
        <Text> HEELOOOOO </Text>
        <Text> HEELOOOOOoooooo </Text>
        <Text> HAI HEELOOOOOoooooo </Text>
        <Text> HAI HEELOOOOOoooooo </Text>
        <Text> HAI HEELOOOOOoooooo </Text>
        <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>
                    <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Debug</Text>
//           <Text style={styles.sectionDescription}>
//             <DebugInstructions />
//           </Text>
//         </View>
//     </>
//   );
// };

MyApp = codePush(codePushOptions)(MyApp);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    height: 40,
    width: 60,
    color: Colors.red
  }
});

export default MyApp;

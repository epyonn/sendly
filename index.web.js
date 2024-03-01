import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Register the app component
AppRegistry.registerComponent(appName, () => App);

// AppRegistry.runApplication is what runs the app as a web application.
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AVVButton_Preview } from './src/AVVButton';
import { AVVTextField_Preview } from './src/AVVTextField';
import { AVVText_Preview } from './src/AVVText';
import AVVScore, { AVVScore_Preview } from './src/AVVScore';

import { AVVTable_Preview } from './src/AVVTable';
import { AVVTableCell_Preview } from './src/AVVTableCell';

export default function App() {
  return (
    // <></>
    // <AVVTextField_Preview />
    // <AVVButton_Preview />
    // <AVVText_Preview />
    // <AVVScore_Preview />
    // <AVVScore_Preview />
    <AVVTable_Preview />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

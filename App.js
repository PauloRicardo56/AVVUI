import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AVVButton_Preview } from './src/components/AVVButton';
import { AVVTextField_Preview } from './src/components/AVVTextField';
import { AVVText_Preview } from './src/components/AVVText';
import { AVVScore_Preview } from './src/components/AVVScore';
import { AVVTableCell_Preview } from './src/components/AVVTableCell';
import { AVVTable_Preview } from './src/components/AVVTable';

export default function App() {
  return (
    // <AVVTextField_Preview />
    // <AVVButton_Preview />
    // <AVVText_Preview />
    // <AVVScore_Preview />
    // <AVVTableCell_Preview />
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

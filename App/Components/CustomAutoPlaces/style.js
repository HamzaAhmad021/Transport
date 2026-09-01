import {StyleSheet} from 'react-native';
import { COLORS } from '../../Assests/Themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3.84,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderRadius: 15,
    elevation: 20,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 10
  },
  input: {
  },
});

export default styles;

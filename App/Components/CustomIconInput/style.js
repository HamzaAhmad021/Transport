import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assests/Themes';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 15,
    //color: 'black',
    // borderWidth: 1,
    // backgroundColor: 'white',
    //borderRadius: 10,
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
export default styles;

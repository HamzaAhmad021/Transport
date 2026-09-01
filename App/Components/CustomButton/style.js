import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../Assests/Themes';

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 35,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 20,
    fontFamily: FONTS.Nunito_Bold
  },

});

export default styles;

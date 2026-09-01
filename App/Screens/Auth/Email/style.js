import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  screen: {
    flex: 1,
    marginHorizontal: 20,
  },
  backPic: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginCar: {
    width: '100%',
    height: 400,
  },
  title: {
    color: COLORS.grayScale,
    fontSize: 28,
    marginTop: 20,
    fontFamily: FONTS.Nunito_Bold
  },
  text: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Medium
  },
  emailText:{
    color: COLORS.grayScale,
    fontSize: 15,
    marginTop: 30,
    fontFamily: FONTS.Nunito_Bold
  },
  noteText: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Bold
  },
  descrip: {
    color: COLORS.grayScale,
    fontSize: 13,
    marginRight: 3,
    fontFamily: FONTS.Nunito_Medium
  },
  btnExtraStyle: {
    backgroundColor: COLORS.golden,
    marginTop: 30,
  },
  btnStyle: {
    backgroundColor: COLORS.golden,
    marginTop: 15,
  },
  btnText: {
    color: COLORS.golden,
  },
  inputExtra: {
    //flex: 1,
    borderColor: COLORS.golden,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  note: {
    marginHorizontal: 14,
    marginBottom: 15,
  },
  inputView: {
    flexDirection: 'row',
  },
});
export default styles;

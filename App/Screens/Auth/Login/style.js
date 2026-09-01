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
  header: {
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
  },
  textExtraStyle: {
    fontSize: 17,
  },
  accountText: {
    fontSize: 14,
    fontWeight: '400',
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
  inputView: {
    marginTop: 30,
  },
  rememberText: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 4,
  },
  rememberView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 15,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 10,
  },
  backPic: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginCar: {
    width: '100%',
    height: 380,
  },
  title: {
    color: COLORS.grayScale,
    fontSize: 28,
    fontFamily: FONTS.Nunito_Bold
  },
  text: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Medium
  },
  titleView: {
    marginVertical: 23,
  },
  btnExtraStyle: {
    backgroundColor: COLORS.golden,
    marginTop: 30,
  },
  btnStyle: {
    backgroundColor: COLORS.white,
    marginTop: 15,
  },
  btnText: {
    color: COLORS.golden,
  },
  orText: {
    color: COLORS.grayScale,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: FONTS.Nunito_SemiBold
  },
  iconBack: {
    backgroundColor: COLORS.white,
    width: '12%',
    height: '42%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 6,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

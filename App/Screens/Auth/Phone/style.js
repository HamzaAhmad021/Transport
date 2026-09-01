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
    fontFamily: FONTS.Nunito_Bold,
    lineHeight: 34
  },
  text: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Medium
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
  orText: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
  },
  iconBack: {
    backgroundColor: COLORS.white,
    width: '11%',
    height: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 6,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputExtra: {
    flex: 1,
    borderColor: COLORS.golden,
    height: 50,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 15,
  },
  note: {
    marginHorizontal: 14,
    marginBottom: 15,
  },
  inputView: {
    flexDirection: 'row',
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: COLORS.golden,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 18,
  },
  flag: {
    fontSize: 20,
    marginRight: 5,
  },
  dialCode: {
    fontSize: 16,
    color: COLORS.darkGray,
    fontFamily: FONTS.Nunito_SemiBold
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.golden,
  },
  title: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  titleView: {
    alignItems: 'center',
    // marginBottom: 25,
    // justifyContent: 'flex-end'
  },
  picsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    // marginTop: 20,
  },
  picView: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  backPic: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: COLORS.grayScale,
    fontSize: 37,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
    lineHeight: 45,
  },
  headertext: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Regular,
    lineHeight: 20,
  },
  screen: {
    marginHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 8,
    backgroundColor: COLORS.lightPink,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: COLORS.BaseRed,
    width: 30,
    height: 7,
  },
  btnStyle: {
    marginTop: 17,
    backgroundColor: COLORS.golden,
  },
  btnExtraStyle: {
    marginTop: 10,
    backgroundColor: COLORS.white,
  },
  btnText: {
    color: COLORS.golden,
  },
  agreement: {
    color: COLORS.grayScale,
    fontSize: 15,
    fontWeight: '400',
    textDecorationLine: 'underline',
    fontFamily: FONTS.Nunito_Medium,
    lineHeight: 16,
    fontStyle: 'italic'
  },
  agreementText: {
    color: COLORS.grayScale,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 20,
    fontFamily: FONTS.Nunito_Medium,
    lineHeight: 16
  },
  splashCar: {
    width: '100%',
    height: '69%',
  },
  carouselItem: {
    //marginHorizontal: 20
    //paddingHorizontal: 20,
  },

  carouselWidth: {
    //width: '100%',
  },
  slideView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

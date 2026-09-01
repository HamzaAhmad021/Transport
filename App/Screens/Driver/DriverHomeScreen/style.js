import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    color: COLORS.grayScale,
    marginLeft: 10,
    fontFamily: FONTS.Nunito_Bold
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subHeader: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iconBack: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: COLORS.lightgrey,
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  contentText: {
    fontSize: 20,
    color: COLORS.grayScale,
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold
  },
  btnText: {
    borderWidth: 1,
    borderRadius: 10,
    height: 33,
    width: '49.5%',
    justifyContent: 'center',
    borderColor: COLORS.lightgrey,
  },
  activeBtn: {
    borderColor: COLORS.golden,
  },
  rideText: {
    color: '#000',
  },
  bookText: {
    color: '#000',
  },
  activeText: {
    color: COLORS.golden,
    fontWeight: '400',
  },
  rideText: {
    fontSize: 14,
    color: COLORS.grayScale,
    textAlign: 'center',
  },
  bookText: {
    fontSize: 14,
    color: COLORS.grayScale,
    textAlign: 'center',
  },
  pickText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold
  },
  amountText: {
    fontSize: 16,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold
  },
  boxBack: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  boxtwoBack: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 10,
  },
  dollarText: {
    fontSize: 16,
    color: COLORS.golden,
    fontFamily: FONTS.Nunito_SemiBold
  },
  estimatedText: {
    fontSize: 15,
    color: COLORS.grey,
    lineHeight: 22,
    fontFamily: FONTS.Nunito_Regular
  },
  btnExtraStyle: {
    backgroundColor: COLORS.golden,
    marginTop: 10,
    marginBottom: 15,
  },
  grabText: {
    fontSize: 12,
    color: COLORS.white,
    marginRight: 8,
    fontFamily: FONTS.Nunito_SemiBold
  },
  chooseText: {
    fontSize: 13,
    color: COLORS.grey,
    marginTop: 5,
  },
  addressText: {
    fontSize: 13,
    color: COLORS.grey,
    fontFamily: FONTS.Nunito_Regular
  },
  timeText: {
    fontSize: 13,
    color: '#364B63',
    // marginLeft: 10,
    fontFamily: FONTS.Nunito_Bold
  },
  line: {
    height: 5,
    backgroundColor: COLORS.lightgrey,
    marginHorizontal: 5,
  },

  bottomButtonContainer: {
    marginTop: 5,
  },

  ignoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E53935',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  acceptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#388E3C',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FONTS.Nunito_Bold
  },

  arrowBox: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 10,
  },

  arrowLeft: {
    position: 'absolute',
    left: 10,
    opacity: 0.3,
  },

  arrowRight: {
    position: 'absolute',
    right: 10,
    opacity: 0.3,
  },
  grabView: {
    flexDirection: 'row',
    backgroundColor: '#CE6800',
    borderRadius: 15,
    alignItems: 'center',
  },
  lineTwo: {
    height: 10,
    width: 1,
    backgroundColor: COLORS.lightgrey,
    marginHorizontal: 8,
    marginTop: 5
  },
  message: {
    position: 'absolute',
    backgroundColor: '#08875D',
    right: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    bottom: 480,
  },
});
export default styles;

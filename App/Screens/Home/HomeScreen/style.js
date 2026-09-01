import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 15,
    fontFamily: FONTS.Nunito_Bold,
  },
  header: {
    backgroundColor: COLORS.grayScale,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subHeader: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 50
  },
  iconBack: {
    width: 38,
    height: 38,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: COLORS.white,
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
    fontFamily: FONTS.Nunito_Bold,
  },
  btnText: {
    borderWidth: 1,
    borderRadius: 10,
    height: 33,
    width: '49%',
    justifyContent: 'center',
    borderColor: COLORS.lightgrey,
  },
  extraStyle: {
    backgroundColor: COLORS.white,
    marginTop: 20,
  },
  btnCustomText:{
    fontSize: 15,
    color: 'red'
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
    fontFamily: FONTS.Nunito_Medium,
  },
  bookText: {
    fontSize: 14,
    color: COLORS.grayScale,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Medium,
  },
  pickText: {
    fontSize: 16,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold,
    
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
    marginTop: 5
  },
  dollarText: {
    fontSize: 16,
    color: COLORS.golden,
  },
  estimatedText: {
    fontSize: 15,
    color: COLORS.grey,
    lineHeight: 22,
    fontFamily: FONTS.Nunito_Regular,
  },
  btnExtraStyle: {
    backgroundColor: COLORS.golden,
    marginTop: 10,
    marginBottom: 15,
  },
   grabText: {
    fontSize: 17,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Bold,
  },
  chooseText: {
    fontSize: 13,
    color: COLORS.grey,
    marginTop: 5,
    fontFamily: FONTS.Nunito_Regular,
    lineHeight: 15,
  },
  lightView: {
    flexDirection: 'row',
    backgroundColor: '#CE6800',
    borderRadius: 15,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginTop: 5
  },
  quickView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginTop: 20,
    marginBottom: 5
  },
  vehicleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 7,
    alignItems: 'center',
  },
  currencyView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    alignItems: 'center',
  },

  /*******************************/

  searchingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'white',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  topBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#CE6800',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
   // paddingTop: 10,
  },
  
  searchingText: {
    color: COLORS.white,
    fontSize: 23,
    fontFamily: FONTS.Nunito_Bold,
    marginLeft: 10
  },
  
  cancelText: {
    color: 'white',
    fontSize: 22,
  },
  
  footer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 7,
    shadowColor: COLORS.black,
    shadowOpacity: 3.25
  },
  
  waitText: {
    fontSize: 19,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold
  },
  
  markerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#B05E0D',
    backgroundColor: 'rgba(255, 165, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  pin: {
    width: 24,
    height: 24,
    backgroundColor: '#B05E0D',
    borderRadius: 12,
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
    bottom: 430,
  },
  line:{
    width: 40,
    height: 4,
    borderRadius: 10,
    backgroundColor: COLORS.grayScale,
    marginBottom: 10
  }
});
export default styles;

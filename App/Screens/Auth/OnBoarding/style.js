import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 10,
    fontFamily: FONTS.Nunito_Bold,
  },
  text: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: FONTS.Nunito_SemiBold,
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
  },
  lineGroup: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  line: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightgrey,
  },
  lineText: {
    flex: 1,
    fontSize: 11,
    color: COLORS.grayScale,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  inputText: {
    fontSize: 13,
    color: COLORS.grayScale,
    marginBottom: 5,
    fontFamily: FONTS.Nunito_Bold,
  },
  emailText:{
    fontSize: 13,
    color: COLORS.grayScale,
    marginBottom: 5,
    fontFamily: FONTS.Nunito_Bold,
    marginTop: 15
  },
  dateText:{
    fontSize: 13,
    color: COLORS.grayScale,
    marginBottom: 5,
    fontFamily: FONTS.Nunito_Bold,
    marginTop: 15
  },
  selectText:{
    fontSize: 13,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold,
    marginTop: 15
  },
  emergencyText:{
    fontSize: 13,
    color: COLORS.grayScale,
    marginBottom: 5,
    fontFamily: FONTS.Nunito_Bold,
    marginTop: 15
  },
  cnicText: {
    fontSize: 13,
    color: COLORS.grayScale,
    marginBottom: 5,
    fontFamily: FONTS.Nunito_Bold,
  },
  inputExtra: {
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 15,
    height: 50,
  },
  genderText: {
    fontSize: 15,
    color: COLORS.grayScale,
    marginLeft: 5,
    alignSelf: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  inputView: {
    
  },
  imageView: {
    width: width - 40,
    height: height * 0.2,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderStyle: 'dashed',
    justifyContent: 'center',
  },
  svg: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  picText: {
    fontSize: 15,
    color: COLORS.golden,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  sizeText: {
    fontSize: 13,
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  selectedImage: {
    width: 368,
    height: 178,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
export default styles;

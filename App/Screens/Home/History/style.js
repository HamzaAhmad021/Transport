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
  header: {
    backgroundColor: COLORS.white,
    //flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linetwo: {
    height: 9,
    backgroundColor: '#F0F5FF',
    marginVertical: 5,
  },
  lineGroup: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightgrey,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginVertical: 8
  },
  linelast:{
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginTop: 8
  },
  lineText: {
    // flex: 1,
    marginHorizontal: 15,
    fontSize: 11,
    color: COLORS.grayScale,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold
  },
  screen: {
    flex: 1,
    marginHorizontal: 20,
  },
  boxContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgrey,
    //paddingHorizontal: 10,
    paddingTop: 5,
    //backgroundColor: 'red'
    marginBottom: 5
  },
  upperText: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold
  },
  date: {
    fontSize: 13,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular
  },
  idText: {
    fontSize: 13,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular
  },
  address: {
    fontSize: 14,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Medium
  },
  iconTexts: {
    fontSize: 13,
    color: COLORS.grayScale,
    marginLeft: 5,
    fontFamily: FONTS.Nunito_Bold
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  totalAmount: {
    fontSize: 17,
    color: COLORS.golden,
    marginLeft: 5,
    fontFamily: FONTS.Nunito_SemiBold
  },
  totalView: {
    flexDirection: 'row',
    backgroundColor: '#F0F5FF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
});
export default styles;

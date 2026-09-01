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
    marginLeft: 10,
    fontFamily: FONTS.Nunito_Bold,
  },
  header: {
    backgroundColor: COLORS.grayScale,
    //flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.white,
    fontFamily: FONTS.Nunito_Bold,
  },
  number: {
    fontSize: 13,
    color: COLORS.lightgrey,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  listItem: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  lineView: {
    height: 10,
    backgroundColor: COLORS.lightgrey,
  },
  linetwo: {
    height: 8,
    backgroundColor: COLORS.lightgrey,
  },
  lineThree: {
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginLeft: 30,
  },
  totalText: {
    fontSize: 15,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  line: {
    width: 1.5,
    backgroundColor: COLORS.lightgrey,
  },
  screen: {
    flex: 1,
    //marginHorizontal: 20,
    //backgroundColor: 'red'
  },
  cardView: {
    backgroundColor: COLORS.golden,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 100,
    marginHorizontal: 40,
    marginTop: 20
  },
  pic: {
    position: 'absolute',
    height: 100,
    width: '100%',
  },
  cardHalfView: {
    backgroundColor: COLORS.grayScale,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 40,
    marginBottom: 20
  },
  amountText: {
    fontSize: 35,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
  },
  walletText: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  renderList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  totalEarning:{
    fontSize: 13,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular,
    textAlign: 'center'
  },
  totalAmount:{
    fontSize: 17,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold,
    textAlign: 'center'
  },
  lineTwo: {
    height: 40,
    width: 1,
    backgroundColor: COLORS.lightgrey,
    marginHorizontal: 8,
    
  },
  linethree:{
      height: 5,
      backgroundColor: '#F0F5FF',
      marginVertical: 5,
   
  }
});
export default styles;

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
    fontFamily: FONTS.Nunito_Bold,
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
  totalText: {
    fontSize: 13,
    color: COLORS.grayScale,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  amountText: {
    fontSize: 20,
    color: COLORS.grayScale,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F0F5FF',
  },
  input: {
    alignItems: 'center',
    flex: 1,
  },
  inputExtra: {
    backgroundColor: '#F0F5FF',
    borderColor: '#F0F5FF',
    fontSize: 40,
    flex: 1,
    textAlign: 'center',
  },
  amount: {
    fontSize: 18,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular,
  },
  amountButton: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    paddingVertical: 8,
    width: '24%',
    justifyContent: 'space-between'
  },
  btnExtraStyle: {
    backgroundColor: COLORS.golden,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
export default styles;

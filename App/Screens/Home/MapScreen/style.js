import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    color: COLORS.white,
    marginLeft: 10,
    fontFamily: FONTS.Nunito_Bold,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.white,
  },
  header: {
    backgroundColor: '#CE6800',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 20,
    paddingBottom: 20,
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
    width: '49.5%',
    justifyContent: 'center',
    borderColor: COLORS.lightgrey,
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
  pickText: {
    fontSize: 16,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Bold,
  },
  inputStyle: {
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 10,
    marginTop: 5
  },
  estimatedText: {
    fontSize: 15,
    color: COLORS.grey,
    lineHeight: 22,
    fontFamily: FONTS.Nunito_Medium,
  },
  extraStyle: {
    backgroundColor: COLORS.white,
    marginTop: 20,
  },
  btnText: {
    color: 'red',
  },
  locationIcon: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderRadius: 25,
    elevation: 15,
    padding: 7,
    alignItems: 'flex-end',
    marginBottom: 20,
    zIndex: 100,
    position: 'absolute',
    //top: 20,
    right: 10,
    //left: 0,
    bottom: 10
},
});
export default styles;

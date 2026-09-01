import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../Assests/Themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  offlineButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    color: '#fff',
    fontFamily: FONTS.Nunito_Bold
  },
  card: {
    //backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginVertical: 8,
    borderColor: COLORS.lightgrey,
    borderWidth: 1
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginHorizontal: 15,
    marginVertical: 15
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  duration: {
    fontSize: 15,
    marginLeft: 4,
    fontFamily: FONTS.Nunito_Bold,
    color: COLORS.grayScale
  },
  flash: {
    marginLeft: 4,
    color: '#F39C12',
    fontWeight: 'bold',
  },
  tripType: {
    marginLeft: 6,
    fontSize: 12,
    color: '#888',
    fontFamily: FONTS.Nunito_Regular
  },
  time: {
    textAlign: 'right',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold
  },
  acceptText: {
    color: 'green',
    fontSize: 12,
    marginBottom: 6,
    fontFamily: FONTS.Nunito_Bold,
    marginHorizontal: 15
  },
  earnContainer: {
    backgroundColor: 'green',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginBottom: 6,
    marginHorizontal: 15
  },
  earnText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: FONTS.Nunito_SemiBold
  },
  address: {
    fontSize: 13,
    color: '#555',
    fontFamily: FONTS.Nunito_Medium,
    marginTop: 3
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   // marginTop: 7,
    marginHorizontal: 20,
    marginVertical: 12
  },
  removeText: {
    color: '#E74C3C',
    fontSize: 15,
    fontFamily: FONTS.Nunito_SemiBold,
    marginBottom: 5
  },
  acceptButton: {
    color: '#F39C12',
    fontSize: 15,
    fontFamily: FONTS.Nunito_Bold
  },
  repeatIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    justifyContent: 'center',
  },
  iconBack: {
    width: 38,
    height: 38,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: COLORS.lightgrey,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginVertical: 5
  },
  lineTwo: {
    height: 25,
    width: 1,
    backgroundColor: COLORS.lightgrey,
    //marginVertical: 5
  }
});
export default styles;

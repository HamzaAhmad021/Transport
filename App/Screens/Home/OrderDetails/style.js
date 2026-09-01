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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linetwo: {
    height: 9,
    backgroundColor: '#F0F5FF',
    marginVertical: 5,
  },
  boxContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.lightgrey,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  screen: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10
  },
  pickUpHeader:{
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.golden
  },
  line: {
    width: 1.5,
    backgroundColor: COLORS.lightgrey,
  },
  card: {
    borderColor: COLORS.lightgrey,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1
  },
  sectionTitle: {
    color: '#D4BD98',
    marginBottom: 8,
    fontSize: 14,
    fontFamily: FONTS.Nunito_SemiBold
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  dot: {
    marginTop: 4,
    marginRight: 10,
  },
  timelineTextContainer: {
    flex: 1,
    marginLeft: 5
  },
  timelineBold: {
    color: COLORS.grayScale,
    marginBottom: 2,
    fontFamily: FONTS.Nunito_Bold
  },
  timelineAddress: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular
  },
  detailText: {
    fontSize: 14,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_Regular
  },
  label: {
    fontSize: 14,
    color: COLORS.grayScale,
    fontFamily: FONTS.Nunito_SemiBold
  },
  earnedTitle: {
    fontSize: 15,
    color: COLORS.golden,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold
  },
  earnedAmount: {
    color: COLORS.golden,
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold
  },
  estimatedText:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lineThree: {
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginVertical: 10
  },
});
export default styles;

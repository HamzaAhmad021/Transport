import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../Assests/Themes";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 20,
        color: COLORS.grayScale,
        marginLeft: 10,
        fontFamily: FONTS.Nunito_Bold
      },
      header: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      linetwo: {
        height: 9,
        backgroundColor: '#F0F5FF',
        marginVertical: 5,
      },
      lineThin:{
        height: 1,
        backgroundColor: COLORS.lightgrey,
        marginVertical: 15,
      },
      lineGroup: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 20
      },
      line: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      lineView: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.lightgrey,
      },
      lineText: {
        fontSize: 11,
        marginHorizontal: 15,
        color: COLORS.grayScale,
        textAlign: 'center',
        fontFamily: FONTS.Nunito_SemiBold
      },
      earningText:{
        fontSize: 15,
        color: COLORS.grayScale,
        fontFamily: FONTS.Nunito_Bold
      },
      refID:{
        fontSize: 13,
        color: COLORS.grayScale,
        fontFamily: FONTS.Nunito_Regular
      },
      amount:{
        fontSize: 17,
        color: 'green',
        fontFamily: FONTS.Nunito_Bold
      },
      earningVew:{
        flexDirection: 'row',
          marginHorizontal: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
      }
})
export default styles;
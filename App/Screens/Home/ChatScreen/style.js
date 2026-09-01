import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../Assests/Themes";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8FF', // Light background
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    headerText: {
      fontSize: 18,
    },
    messageContainer: {
      flex: 1,
      marginHorizontal: 15
    },
    titleView:{
    flexDirection: 'row'
    },
    dateDivider: {
      textAlign: 'center',
      color: '#A9A9A9',
      marginVertical: 10,
      fontSize: 12,
    },
    messageBubble: {
      borderRadius: 10,
      padding: 15,
      marginVertical: 5,
      maxWidth: '100%',
      //alignSelf: 'flex-start',
    },
    myMessage: {
      backgroundColor: 'white', // Light green for sent messages
      //alignSelf: 'flex-end',
    },
    otherMessage: {
      backgroundColor: '#08875D', 
    },
    /*senderText: {
      fontSize: 12,
      color: '#555',
      marginBottom: 2,
    },*/
    messageText: {
      fontSize: 16,
      color: COLORS.grayScale,
      fontFamily: FONTS.Nunito_Regular
    },
    timeText: {
      fontSize: 10,
      color: '#888',
      alignSelf: 'flex-end',
      marginTop: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: COLORS.grey,
      borderRadius: 15,
      paddingHorizontal: 15,
      //paddingVertical: 12,
      height: 50,
      marginRight: 10,
      fontSize: 16,
    },
    sendButton: {
      backgroundColor: '#08875D',
      borderRadius: 25,
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize: 20,
      color: COLORS.grayScale,
      marginLeft: 20,
      fontFamily: FONTS.Nunito_Bold
    },
    lineGroup: {
      flexDirection: 'row',
      marginVertical: 15,
      alignItems: 'center',
    },
    lineView: {
      flex: 1,
      height: 1,
      backgroundColor: COLORS.lightgrey,
    },
    lineText: {
      // flex: 1,
      marginHorizontal: 15,
      fontSize: 11,
      color: COLORS.grey,
      textAlign: 'center',
      fontFamily: FONTS.Nunito_Regular
    },
    nameText:{
      fontSize: 17,
      color: COLORS.grayScale,
      marginBottom: 2,
      fontFamily: FONTS.Nunito_Bold
    },
    driverText:{
      fontSize: 17,
      color: 'white',
      marginBottom: 2,
      fontFamily: FONTS.Nunito_Bold
    },
    message:{
      fontSize: 16,
      color: COLORS.grayScale,
      fontFamily: FONTS.Nunito_Regular,
      marginTop: 5
    },
    driverMessage:{
      fontSize: 16,
      color: 'white',
      fontFamily: FONTS.Nunito_Regular,
      marginTop: 5
    },
    time:{
      fontSize: 10,
      color: COLORS.grayScale,
      alignSelf: 'flex-end',
      marginTop: 5,
      fontFamily: FONTS.Nunito_SemiBold
    },
    driverTime:{
      fontSize: 10,
      color: 'white',
      alignSelf: 'flex-end',
      marginTop: 5,
      fontFamily: FONTS.Nunito_Bold
    }
  });
  export default styles;
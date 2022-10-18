import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 40,
    },
    flexRow: {
      flexDirection:'column'
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      top: 20,
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button: {
      alignSelf:'center', 
      marginTop: 60
    },
    errorText: {
      fontSize: 14,
      color: 'red'
    },
    errorInput: {
      marginTop: 16,
      marginRight: 16,
      marginBottom: 0,
      marginLeft: 16,
      border: '2px solid red !important'
    },
    textInput: {
      marginTop: 16,
      marginRight: 16,
      marginBottom: 0,
      marginLeft: 16
    },
    surface: {
      height:'100%'
    },
    alignRow: {
      flexDirection: 'row', 
      alignItems: 'center'
    },
    buttonStyle: {
      marginTop: 30,
      borderRadius: 5
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
   
  })
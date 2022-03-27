import { StyleSheet } from "react-native";
// import { StatusBar } from 'expo-status-bar';
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    padding: 20,
  },
  scrollView: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  header: {},

  header_bar: {},

  header_text: {},

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9E9E9",
    borderRadius: 20,
  },

  content_container: {
    backgroundColor: "#00579C",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
  },

  content_header: {},

  input_container1: {
    marginBottom: 10,
  },
  input_container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#EE9E54",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    backgroundColor: "#EE9E54",
    flexDirection: "row",
    padding: 10,
    bottom: 0,
    width: windowWidth,
    position: "absolute",
  },
  touchableContainer: {
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#EFF4F4",
    borderRadius: 4,
    borderColor: "black",
    // borderWidth:1,
  },
  textInput: {
    paddingLeft: 5,
    width: 300,
    height: 37,
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    borderRadius: 8,
    margin: 10,
  },
  footerIcon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // flex:1,
    margin: 20,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    // padding: 1,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    backgroundColor: "#EE9E54",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignSelf: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default styles;

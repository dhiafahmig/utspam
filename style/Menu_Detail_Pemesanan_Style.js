import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    padding: 20,
  },
  scrollView: {},

  header: {},

  body: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  content_container: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },

  summaryContainer: {
    backgroundColor: "#F0F0F0",
    elevation: 5,
    padding: 20,
    // borderColor:'black',
    // borderWidth:1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },

  travelRoute: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  travelSchedule: {
    marginTop: 18,
  },

  travelService: {
    marginTop: 15,
  },

  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    alignContent: "center",
    justifyContent: "center",
  },

  content_header: {
    // alignItems:'center',
    // justifyContent:'center',
  },

  input_container1: {
    marginTop: 10,
  },

  input_container2: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'center',
  },

  buttonSubmit: {
    margin: 15,
    marginRight: 20,
    padding: 13,
    flexDirection: "row",
    backgroundColor: "#EE9E54",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
  },

  buttonLanjutkan: {
    margin: 15,
    marginLeft: 20,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#00579C",
    borderColor: "#00579C",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 145,
  },

  footer: {
    // // backgroundColor:'#F4F4F4',
    // backgroundColor:'#EE9E54',
    // flexDirection: 'row',
    // padding: 10,
    // bottom: 0,
    // width: windowWidth,
    // position:'absolute',
  },
  touchableContainer: {
    // width:300,
    // marginTop:10,
    // marginLeft:10,
    // padding:10,
    // flexDirection:'row',
    // backgroundColor:'#EFF4F4',
    // borderRadius:4,
    // borderColor:'black',
    // // borderWidth:1,
  },
  textInput: {
    paddingLeft: 10,
    width: 300,
    height: 37,
    // borderWidth:0.5,
    // borderColor: '#777',
    padding: 8,
    borderRadius: 4,
    margin: 10,
    elevation: 3,
    backgroundColor: "#EFF4F4",
  },
  footerIcon: {
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft:10,
    // marginRight:10,
  },
});
export default styles;

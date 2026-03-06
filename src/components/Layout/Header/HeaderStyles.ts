import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    padding: 30,
    backgroundColor: "#34405b",
    borderRadius: 10,
    marginBottom: 50,
  },

  headerText: {
    color: "rgb(251,251,251)",
    fontSize: 24,
    marginTop: 30
  },

  menuOptionsText:{
    color: "rgb(251,251,251)",
    fontSize: 20,
    marginTop: 30
  },

  headerTextHover: {
    color: "rgb(202,209,250)",
  },

  containerButtonsHeader: {
    flexDirection: "row",
  },

  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "#2a2a2a",
    flexDirection: "column",
    minWidth: 180,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  button: {
    fontSize: 22,
    color: "#c3c4ff",
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
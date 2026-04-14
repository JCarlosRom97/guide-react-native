import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#34405b",
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#34405b",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  containerButtonsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  menuButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  pressed: {
    opacity: 0.5,
  },

  menuOptionsText: {
    color: "#fff",
    fontSize: 14,
  },

  dropdown: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    paddingVertical: 8,
    minWidth: 150,
    elevation: 6,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  dropdownText: {
    color: "#fff",
    fontSize: 14,
  },
});
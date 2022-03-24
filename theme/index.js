export const colors = {
  active: "#7bb886",
  inactive: "#b4b4b4",
  primary: "#212121",
  secondary: "#A5A5A5",
  appBackground: "#fff",
};

export const ui = {
  container: {
    backgroundColor: colors.appBackground,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  categoryListContainer: {
    height: 250,
    overflow: "hidden",
    borderRadius: 20,
  },
  categoryListText: {
    color: "#fff",
    fontFamily: "Fredoka-Regular",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "italic",
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  categoryListImage: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  categoryListBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  touchableContainer: {
    borderRadius: 20,
    marginBottom: 20,
  },
};

export const text = {
  title: {
    fontFamily: appFont,
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    paddingVertical: 15,
    color: colors.primary,
  },
  body: {
    fontFamily: appFont,
    fontSize: 18,
    color: colors.primary,
  },
  subtitle: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary,
  },
};

// Default App FontFamily
export const appFont = "Fredoka-Regular";

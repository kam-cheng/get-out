// Default App FontFamily
export const appFont = "Inter-Regular";

// Default App Colors

export const colors = {
  active: "#7bb886",
  inactive: "#B4B4B4",
  primary: "#212121",
  secondary: "#A5A5A5",
  appBackground: "#FFF",
  ratings: "#F7CE61",
  tile: "#F2F4F4",
};

// Default App UI

export const ui = {
  container: {
    backgroundColor: colors.appBackground,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityListTouchable: {
    marginBottom: 20,
  },
  activityListContainer: {
    height: "auto",
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.tile,
    padding: 15,
  },
  activityListImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  activityListDescription: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    flex: 1,
  },
  activityListTitle: {
    color: "#fff",
    fontFamily: appFont,
    fontSize: 26,
    fontWeight: "bold",
    bottom: 10,
    left: 5,
  },
  categoryListContainer: {
    height: 250,
    overflow: "hidden",
    borderRadius: 20,
  },
  categoryListText: {
    color: "#fff",
    fontFamily: appFont,
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

// Default App Text

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
  mediumTitle: {
    fontFamily: appFont,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
  },
  body: {
    fontFamily: appFont,
    fontSize: 18,
    color: colors.primary,
  },
  medium: {
    fontFamily: appFont,
    fontSize: 16,
    color: colors.primary,
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary,
  },
  sectionTitle: {
    fontFamily: appFont,
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 24,
    color: colors.primary,
  },
  meta: {
    marginLeft: 4,
    fontFamily: appFont,
    fontSize: 16,
    color: colors.primary,
  },
};

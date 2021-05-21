import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  notificationContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      display:'none'
    },
  },
  notificationContained: {
    borderRadius: 45,
    height: 25,
    // boxShadow: theme.customShadows.widgetDark,
  },
  notificationContainedShadowless: {
    boxShadow: "none",
  },
  notificationIconContainer: {
    minWidth: 35,
    height: 45,
    borderRadius: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    marginLeft:15,
  },
  notificationIconContainerContained: {
    fontSize: 18,
    color: "#FFFFFF80",
  },
  notificationIconContainerRounded: {
    marginRight: theme.spacing(2),
  },
  containedTypography: {
    color: "white",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    // flexGrow: 1,
  },
  extraButton: {
    color: "white",
    "&:hover, &:focus": {
      background: "transparent",
    },
  },
}));

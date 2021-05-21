import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles(theme => ({
  logotype: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(1.5),
    marginRight: '1%',
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display:'none'
    },
  },
  appBar: {
    width: "100vw",
    backgroundColor:'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing(6),
    width: 36,
    backgroundColor: fade(theme.palette.common.black, 0),
    transition: theme.transitions.create(["background-color", "width"]),
    color:'black',
    [theme.breakpoints.down("sm")]: {
      display:'none'
    },
  },
  searchFocused: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    // "&:hover": {
    //   cursor: "pointer",
    // },
  },
  searchIconOpened: {
    left: theme.spacing(1),
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: "100%",
  },
  messageContent: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  headerProfile:{
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
    "&:hover, &:focus": {
      borderRadius:5
    },
  },
  headerMenuButtonSandwich: {
    marginLeft: 9,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    },
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
  },
  headerIcon: {
    fontSize: 28,
    color: theme.palette.text.secondary+'99',
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  headerIconCollapse: {
    color: theme.palette.text.secondary+'99',
  },
  profileMenu: {
    minWidth: 265
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  profileMenuItem: {
    color: theme.palette.text.hint,
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint,
    '&:hover': {
      color: theme.palette.primary.main,      
    }
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  messageNotification: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },
  messageNotificationSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  messageNotificationBodySide: {
    alignItems: "flex-start",
    // marginRight: 0,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: "none",
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  purchaseBtn: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    marginRight: theme.spacing(3)
  }
}));
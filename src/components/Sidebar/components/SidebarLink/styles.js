import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    width:235,
    textDecoration: "none",
    color:'white',
    margin:"3px 10px",
    borderRadius:5,
    height:40,
  },
  externalLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',    
  },
  linkActive: {
    backgroundColor: theme.palette.primary.main,
    margin:"3px 10px",
    borderRadius:5,
    height:40,
  },
  linkNested: {
    paddingLeft: 0,
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF",
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
  },
  linkIconActive: {
    color: theme.palette.background.light
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 14,
  },
  linkTextActive: {
    color: theme.palette.background.light
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize:12,
    fontWeight:600
  },
  divider: {
    marginTop: theme.spacing(4),
  },
}));

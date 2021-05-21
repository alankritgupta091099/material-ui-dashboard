import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  Language as LanguageIcon,
  AccountBoxOutlined as AccountBoxOutlinedIcon,
  MenuBookTwoTone as MenuBookTwoToneIcon,
  Dashboard as DashboardIcon,
  Inbox as InboxIcon,
  FolderOutlined as FolderOutlinedIcon,
  FormatListBulletedOutlined as FormatListBulletedOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  ExitToAppOutlined as ExitToAppOutlinedIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, type: "title", label: "MAIN" },
  { id: 1, 
    label: "Dashboard", 
    link: "/app/dashboard", 
    icon: <HomeIcon />,
    ddIcon: true 
  },
  {
    id: 2,
    label: "Discover",
    link: "",
    icon: <LanguageIcon />,
    ddIcon: true 
  },
  {
    id: 3,
    label: "Users",
    link: "",
    icon: <AccountBoxOutlinedIcon />,
    ddIcon: true
  },
  {
    id: 4,
    label: "Documents",
    link: "",
    icon: <MenuBookTwoToneIcon />,
    ddIcon: true
  },
  {
    id: 5,
    label: "Applications",
    link: "",
    icon: <DashboardIcon />,
    ddIcon: true
  },
  {
    id: 6,
    label: "Pages",
    link: "",
    icon: <DescriptionOutlinedIcon/>,
    ddIcon: true
  },
  { id: 7, type: "divider" },
  { id: 8, type: "title", label: "SECONDARY" },
  { 
    id: 9, 
    label: "Support Center", 
    link: "", 
    icon: <FAQIcon /> 
  },
  { 
    id: 10, 
    label: "Inbox", 
    link: "", 
    icon: <InboxIcon /> 
  },
  { 
    id: 11, 
    label: "File Manager", 
    link: "", 
    icon: <FolderOutlinedIcon /> 
  },
  { 
    id: 12, 
    label: "Data List", 
    link: "", 
    icon: <FormatListBulletedOutlinedIcon /> 
  },
  { id: 13, type: "divider" },
  {
    id: 14,
    label: "Settings",
    link: "",
    icon: <SettingsOutlinedIcon /> 
  },
  {
    id: 15,
    label: "Log out",
    link: "",
    icon: <ExitToAppOutlinedIcon/>
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);

import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components

export default function SidebarLink({
  link,
  icon,
  label,
  location,
  isSidebarOpened,
  nested,
  type,
  ddIcon
}) {
  var classes = useStyles();

  // local
  var isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);

  if (type === "title")
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened,
        })}
      >
        {label}
      </Typography>
    );

  if (type === "divider") 
    return <Typography className={classes.divider} />;
  
  return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
        style={ isLinkActive ? {
            backgroundColor: '#4B50DC',
            color: '#F3F5FF'
          } : null
        }
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
        {
          ddIcon ? 
            <ListItemIcon
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive,
              })}
            >
              <ExpandMoreIcon style={{marginLeft:60}}/>
            </ListItemIcon> 
            : <></>
        }        
      </ListItem>
    );
}

import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Container,
  Box,
  Button
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  BarChart,
  Bar,
  Tooltip,
  // YAxis,
  // XAxis,
} from "recharts";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PrintIcon from '@material-ui/icons/Print';
import Notification from "../../components/Notification/Notification";
// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import Table from "./components/Table/Table";
import Divider from '@material-ui/core/Divider';

const Data = [
  { name: "A", value: 400},
  { name: "B", value: 300},
  { name: "C", value: 300},
  { name: "D", value: 200},
  { name: "E", value: 400},
  { name: "F", value: 300},
  { name: "G", value: 300},
  { name: "H", value: 200},
];

const barChartData = [
  {
    value: 400,
  },
  {
    value: 3000,
  },
  {
    value: 2000,
  },
  {
    value: 2780,
  },
  {
    value: 1890,
  },
  {
    value: 2390,
  },
  {
    value: 3490,
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        width: '100px',
        backgroundColor: '#B9B9B9',
        color: '#fff',
        textAlign: 'center',
        padding: '2px 0',
        borderRadius: '10px'

      }}>
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  const boxstyle = { 
    border: 1,
    borderColor:theme.palette.text.hint + "80",    
    style: { padding:10 , marginTop:15,marginBottom:15, width:'100%'}
  }

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <ResponsiveContainer width="100%" height={150}>
            <Widget
              title="Total Income"
              upperTitle
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
              <div className={classes.progressSection}>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="h2" 
                    gutterBottom
                    style={{
                      fontWeight:600,
                      fontSize:30,
                      color:'black'
                    }}
                  >
                    $ 124,563.00
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div style={{width:'35%', marginTop:4}}>
                    <Notification
                      shadowless
                      type="plus"
                      message={'50%'}
                      variant="contained"
                      color="success"
                      shift={5}
                    />
                  </div>
                </Grid>
              </Grid>
                <LinearProgress
                  variant="determinate"
                  value={77}
                  classes={{ barColorPrimary: classes.progressBarPrimary }}
                  className={classes.progress}
                />
                <Typography
                  variant="text" 
                  gutterBottom
                  style={{
                    fontWeight:100,
                    fontSize:14,
                  }}
                >
                  Yearly Goal
                </Typography>
              </div>
            </Widget>
          </ResponsiveContainer>
          <br/><br/>
          <ResponsiveContainer width="100%" height={150} >
            <Widget
              title="New Users"
              upperTitle
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
              <div className={classes.totalValueContainer}>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="h2" 
                    gutterBottom
                    style={{
                      fontWeight:600,
                      fontSize:30,
                      color:'black'
                    }}
                  >
                    94.2%
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <div style={{width:'35%', marginTop:4, marginLeft:'-50%'}}>
                    <Notification
                      shadowless
                      type="plus"
                      message={'50%'}
                      variant="contained"
                      color="success"
                      shift={5}
                    />
                  </div>
                </Grid>
              </Grid>
              </div>
              <div style={{alignSelf:'center'}}>
                <BarChart width={250} height={70} data={barChartData} >
                  <Tooltip />
                  <Bar dataKey="value" fill="#4B50DC" background={{ fill: '#eee' }} />
                </BarChart>
              </div>                
            </Widget>
          </ResponsiveContainer>          
          <br/><br/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h2" 
                  gutterBottom
                  style={{
                    fontWeight:600,
                    fontSize:24,
                    color:'black'
                  }}
                >
                  Balance
                </Typography>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </div>
            }
          >
            <Divider/>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Box {...boxstyle} borderRadius={3}>
                    <Typography variant="text" color="textSecondary" noWrap>
                        Earnings
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                            variant="h2" 
                            gutterBottom
                            style={{
                              fontWeight:600,
                              fontSize:20,
                              color:'black'
                            }}
                          >
                            94.2%
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>                  
                        <Notification
                          shadowless
                          type="plus"
                          message={'50%'}
                          variant="contained"
                          color="success"
                          shift={5}
                        />
                      </Grid>
                    </Grid>
                  </Box>
              </Grid>
              <Grid item xs={6}>
                <Box {...boxstyle} borderRadius={3}>
                    <Typography variant="text" color="textSecondary" noWrap>
                        Sales Value
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Typography
                            variant="h2" 
                            gutterBottom
                            style={{
                              fontWeight:600,
                              fontSize:20,
                              color:'black',                                                            
                            }}
                          >
                            $950
                          </Typography>
                      </Grid>
                      <Grid item xs={6}>                  
                        <Notification
                          shadowless
                          type="plus"
                          message={'50%'}
                          variant="contained"
                          color="success"
                          shift={5}
                        />
                      </Grid>
                    </Grid>
                  </Box>
              </Grid>
            </Grid>            
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={Data}
              >
                {/* <YAxis
                  ticks={[0, 100, 200, 300, 400, 500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                /> */}
                <Tooltip content={<CustomTooltip />}/>                
                <Area
                  type="natural"
                  dataKey="value"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="value"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12}> 
          <Widget 
            upperTitle 
            noBodyPadding 
            bodyClass={classes.tableOverflow}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h2" 
                  gutterBottom
                  style={{
                    fontWeight:600,
                    fontSize:20,
                    color:'black'
                  }}
                >
                  Recent Transactions
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<PrintIcon />}
                    onClick={()=>window.print()}
                  >
                    Print Page
                </Button>   
              </div>
            }>
              <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                style={{marginLeft:20}}
              >
                <Tab label="Incoming" {...a11yProps(0)}/>
                <Tab label="Invoices" disabled />
              </Tabs>
              <TabPanel value={0} index={0}>
                <Table/>
              </TabPanel>              
          </Widget>          
        </Grid>
      </Grid>
    </Container>
  );
}
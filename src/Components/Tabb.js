import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../Styles/Tabb.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchnews = () => {
      // Update the document title using the browser API
      axios({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((responce) => {
          setPosts(responce.data);
        })
        .catch();
    };
    fetchnews();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mens" {...a11yProps(0)} />
          <Tab label="Womens" {...a11yProps(1)} />
          <Tab label="Kids" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {posts.map((item, i) => {
          return (
            <div class="Imageboxs">
              <img
                style={{ width: '250px', height: '250px' }}
                src="https://5.imimg.com/data5/ANDROID/Default/2020/10/DA/GX/TA/115146420/product-jpeg-500x500.jpg"
                alt=""
              />
              <p>Beware of the leopard dsfdsfd dfgdfd</p>
              <p>Rs 200</p>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {posts.map((item, i) => {
          return (
            <div class="Imageboxs">
              <img
                style={{ width: '250px', height: '250px' }}
                src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPWOMEN-SOLID-ARBI11620035E33270B/1595576509144_0..jpg"
                alt=""
              />
              <p>Beware of the leopard dsfdsfd dfgdfd</p>
              <p>Rs 200</p>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {posts.map((item, i) => {
          return (
            <div class="Imageboxs">
              <img
                style={{ width: '250px', height: '250px' }}
                src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14871964/2021/8/27/1b665289-e5f1-4d95-8ecb-49a17e514f861630068662308-Tommy-Hilfiger-Boys-Blue-Printed-Pure-Cotton-Casual-Shirt-66-1.jpg"
                alt=""
              />
              <p>Beware of the leopard dsfdsfd dfgdfd</p>
              <p>Rs 200</p>
            </div>
          );
        })}
      </TabPanel>
    </Box>
  );
}

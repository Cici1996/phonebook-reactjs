import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Container from '@material-ui/core/Container';
import { a11yProps, TabPanel, LinkTab } from './components/MaterialTab';
import { AccountBox, Favorite, Phone } from '@material-ui/icons';
import PhoneBook from './Screens/PhoneBook';
import AddContact from './Screens/AddContact';
import FavoriteScreen from './Screens/Favorite';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <LinkTab icon={<Phone />}  {...a11yProps(0)} />
          <LinkTab icon={<Favorite />} {...a11yProps(1)} />
          <LinkTab icon={<AccountBox />} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <PhoneBook />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FavoriteScreen />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddContact />
        </TabPanel>
      </Container>
    </div>
  );
}

export default App
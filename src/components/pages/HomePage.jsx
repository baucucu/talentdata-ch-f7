import React from 'react';
import {
    Page,
    // Navbar,
    // NavLeft,
    // NavTitle,
    // NavRight,
    // Link,
    // Toolbar,
    // Block,
    BlockTitle,
    List,
    ListItem,
    // Row,
    // Col,
    // Button
} from 'framework7-react';

export default () => (
  <Page>
    <BlockTitle>Projects</BlockTitle>
    <List>
      {/* <ListItem link="/candidates/adobe?syncToAirtable=true" title="Adobe"></ListItem> */}
      <ListItem link="/candidates/adobe_recruiter?syncToAirtable=true" title="Adobe Recruiter"></ListItem>
      <ListItem link="/candidates/garrett_it?syncToAirtable=true" title="Garrett IT Director"></ListItem>
      <ListItem link="/candidates/garrett_hr?syncToAirtable=true" title="Garrett HR"></ListItem>
      <ListItem link="/candidates/garrett_hse?syncToAirtable=true" title="Garrett HSE"></ListItem>
    </List>
    
  </Page>
);

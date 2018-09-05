import React from 'react';

import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function SideDrawer(props) {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            durtion: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false);
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
        >

            <List component="nav">
                {/* If true, the list item will be a button */}
                <ListItem button onClick={()=>scrollToElement('feature')}>
                    Event Starts in
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('venue')}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=>scrollToElement('location')}>
                    Location
                </ListItem>
            </List>

        </Drawer>
    )
}

export default SideDrawer;

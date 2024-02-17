import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import LineAxisIcon from '@mui/icons-material/LineAxis';

export const mainListItems = (
    <React.Fragment>
        <Link href='/dashboard/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/vendors/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Vendors" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/stores/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Stores" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/stores/categories/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Store Categories" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/users/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/products/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/products/categories' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Product Categories" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/sales/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <LineAxisIcon />
                </ListItemIcon>
                <ListItemText primary="Sales" />
            </ListItemButton>
        </Link>
        <Link href='/dashboard/erranders/' className='no-underline'>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Erranders" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
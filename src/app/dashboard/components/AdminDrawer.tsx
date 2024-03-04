'use client';

import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import { useRouter } from 'next/navigation';

const drawerWidth: number = 240;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const initialStates: Array<IType> = [
    {
        active: false,
        url: '/dashboard/',
        name: 'Dashboard',
        icon: <DashboardIcon />,
    }, {
        active: false,
        url: '/dashboard/vendors/',
        name: 'Vendors',
        icon: <PeopleIcon />,
    }, {
        active: false,
        url: '/dashboard/stores/',
        name: 'Stores',
        icon: <StorefrontIcon />,
    }, {
        active: false,
        url: '/dashboard/stores/categories/',
        name: 'Store Categories',
        icon: <CategoryIcon />,
    }, {
        active: false,
        url: '/dashboard/users/',
        name: 'Customers',
        icon: <PeopleIcon />,
    }, {
        active: false,
        url: '/dashboard/products/',
        name: 'Products',
        icon: <Inventory2Icon />,
    }, {
        active: false,
        url: '/dashboard/products/categories/',
        name: 'Product Categories',
        icon: <CategoryIcon />,
    }, {
        active: false,
        url: '/dashboard/sales/',
        name: 'Sales',
        icon: <LineAxisIcon />,
    }, {
        active: false,
        url: '/dashboard/erranders/',
        name: 'Erranders',
        icon: <PeopleIcon />,
    },
];

type IType = { name: string, url: string, active: boolean, icon: any };


const AdminDrawer = (props: any) => {
    const { open, toggleDrawer } = props;

    const [states, setStates] = React.useState(initialStates);
    const [activeState, setActiveState] = React.useState('Dashboard');
    const router = useRouter();


    const handleStateClick = (state: IType) => {
        setActiveState(state.name);
        router.push(state.url);
    }

    return (
        <React.Fragment>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <div className="">
                        {
                            states.map((state: IType, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        // href={state.url}
                                        onClick={() => handleStateClick(state)}
                                        className='no-underline'
                                    >
                                        <ListItemButton className={state.name === activeState ? 'bg-blue-300' : ''}>
                                            <ListItemIcon>
                                                {state.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={state.name} />
                                        </ListItemButton>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* {mainListItems} */}
                    {/* <Divider sx={{ my: 1 }} />
                    {secondaryListItems} */}
                </List>
            </Drawer>
        </React.Fragment>
    )
}

export default AdminDrawer

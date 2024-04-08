import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, Menu, MenuItem, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { TQuery, getAdminProfile, logoutAdmin, setAdmin, useAppDispatch, useAppSelector } from '@/shared';


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

type Setting = {
    name: string,
    url: string,
}
const settings = [
    { name: 'Login', url: '/dashboard/auth/' },
    { name: 'Logout', url: '/dashboard/', },
];

const AdminAppBar = (props: any) => {
    const { open, toggleDrawer } = props;
    const router = useRouter();
    const admin = useAppSelector((state) => state.admin.admin);
    const dispatch = useAppDispatch();

    // Queries
    const { data }: TQuery = useQuery({
        queryKey: ['adminProfile'],
        queryFn: getAdminProfile,
        enabled: true,
    });

    useMemo(() => {
        if (data) {
            dispatch(setAdmin(data?.data.data.admin));
        }
    }, [data]);
    // console.log("data >>>>", data);

    const logout = async () => {
        const response = await logoutAdmin();

        if (response.data.success === true) {
            dispatch(setAdmin(null));
            router.push('/dashboard/');
        } else {
            console.log('Error logging out');
        }
    };

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            marginLeft: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h1"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Box className='ml-6' sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/images/account.png" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings?.map((setting: Setting, index: number) => {
                                if (admin && (setting.name == 'Logout')) {
                                    return (
                                        <MenuItem key={index} onClick={() => {
                                            handleCloseUserMenu();
                                            /// logout first
                                            logout();
                                        }}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </MenuItem>
                                    );
                                }
                                if (!admin && (setting.name == 'Login')) {
                                    return (
                                        <MenuItem key={index} onClick={() => {
                                            handleCloseUserMenu();
                                            /// logout page
                                            router.push(setting.url);
                                        }}>
                                            <Typography textAlign="center">{setting.name}</Typography>
                                        </MenuItem>
                                    );
                                }
                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default AdminAppBar

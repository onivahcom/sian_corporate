import React from 'react';
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForward, ArrowRight, ArrowRightAlt, Computer, ImportExport, LocalHospital, LocalHotel, PersonAdd, Work, } from '@mui/icons-material';
import { NavLink } from "react-router-dom";


import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign'; // Digital Marketing


const services = [
    {
        id: 1,
        title: 'IT Solutions',
        slug: 'it-solutions',
        icon: <Computer fontSize="medium" color="primary" />,
    },

    {
        id: 2,
        title: 'R&D and Training',
        slug: 'R&D-and-Training',
        icon: <Work fontSize="medium" color="primary" />,
    },
    {
        id: 3,
        title: 'Labour Supply Under Contract',
        slug: 'labour-supply-under-contract',
        icon: <PersonAdd fontSize="medium" color="primary" />,
    },
    {
        id: 4,
        title: 'Global Trading',
        slug: 'global-trading',
        icon: <ImportExport fontSize="medium" color="primary" />,
    },
    {
        id: 5,
        title: 'Hospitality Services',
        slug: 'hospitality-services',
        icon: <LocalHospital fontSize="medium" color="primary" />,
    },
];


// Styled ListItem with hover effect
const StyledListItem = styled(ListItem)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
    paddingRight: theme.spacing(8),
    overflow: 'hidden', // 👈 Add this line
    '&:hover': {
        // backgroundColor: theme.palette.action.hover,
        borderBottom: '1px solid #000',
        borderRadius: 0,
        '& .hover-content': {
            opacity: 1,
            right: theme.spacing(2),
        },
    },
}));

const HoverContent = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    right: theme.spacing(-10),
    transform: 'translateY(-50%)',
    opacity: 0,
    overflowX: "hidden",
    transition: 'opacity 0.3s, right 0.3s',
    color: theme.palette.primary.main,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    pointerEvents: 'none',
}));

export default function ServiceSection() {
    return (
        <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: '#fff', color: 'black' }}>
            <Typography variant="h5" gutterBottom textAlign="left" color='primary' sx={{ mb: 6 }}>
                Select your industry. Discover our impact.
            </Typography>

            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
                alignItems="center"
            // justifyContent="center"
            >
                {services.map(({ id, title, icon, slug }) => (
                    <Grid key={id} size={{ xs: 12, sm: 6 }} >
                        <List disablePadding sx={{ borderBottom: "2px solid #eee" }}>
                            <NavLink to={`/services/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <StyledListItem>
                                    <ListItemIcon sx={{ minWidth: 48 }}>{icon}</ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1 }}>
                                                {title}
                                            </Typography>
                                        }
                                    />
                                    <HoverContent className="hover-content" direction="row">
                                        <ArrowForward />
                                    </HoverContent>
                                </StyledListItem>
                            </NavLink>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

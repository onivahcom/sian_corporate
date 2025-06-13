// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Mail, Phone } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#053d6b", color: '#fff', py: 6, mt: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} >
                    {/* Company Info */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            IG Enterprises
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, color: "textSecondary" }}>
                            Delivering top-notch digital solutions tailored for your business growth. Let's build something great together.
                        </Typography>
                    </Grid>

                    {/* Navigation Links */}
                    <Grid size={{ xs: 12, sm: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Products
                        </Typography>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Web App</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Mobile App</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">AI Tools</Link>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Company
                        </Typography>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">About</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Careers</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Contact</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Help Center</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
                        <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", marginBottom: "5px" }} href="#" color="inherit" underline="hover" display="block">Terms & Conditions</Link>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Support
                        </Typography>
                        <Stack direction='row' sx={{ mb: 2 }}>
                            <Mail sx={{ color: "#cdd8e1", fontSize: "0.9rem", mr: 1 }} />
                            <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", }} href="#" color="inherit" underline="hover" display="inline-block">i.g.enterprisespdy@gmail.com</Link>
                        </Stack>
                        <Stack direction='row' sx={{ mb: 2 }}>
                            <Phone sx={{ color: "#cdd8e1", fontSize: "0.9rem", mr: 1 }} />
                            <Link style={{ color: "#cdd8e1", fontSize: "0.9rem", }} href="#" color="inherit" underline="hover" display="inline-block">+91 9999999999</Link>
                        </Stack>
                    </Grid>

                    {/* Social Media */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="#" color="inherit" size="small">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit" size="small">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit" size="small">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit" size="small">
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Line */}
                <Box sx={{ bgcolor: "#053d6b", color: '#fff', }} mt={5} textAlign="center" borderTop="1px solid rgba(255,255,255,0.2)" pt={3}>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {new Date().getFullYear()} IG Enterprises. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

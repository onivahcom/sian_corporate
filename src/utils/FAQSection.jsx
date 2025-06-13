import React, { useState } from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    IconButton,
    Stack,
} from '@mui/material';
import { AddOutlined, ArrowForward, RemoveOutlined } from '@mui/icons-material';

const faqData = [
    {
        question: 'What is Seva Booking?',
        answer: 'Seva Booking allows you to participate in religious rituals by reserving a time for a specific seva at the temple.',
        image: 'https://img.freepik.com/free-photo/computer-engineer-typing-keyboard-writing-code-build-firewalls_482257-101117.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740'
    },
    {
        question: 'How will I receive prasad?',
        answer: 'Prasad will be shipped to the address you provide during booking, after the completion of the seva.',
        image: 'https://img.freepik.com/free-photo/man-requesting-help-from-coworkers-after-finding-bug-data-center-systems_482257-110863.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740'
    },
    {
        question: 'Can I book multiple sevas?',
        answer: 'Yes, you can book multiple sevas in a single transaction.',
        image: 'https://img.freepik.com/free-photo/programmer-requesting-help-from-manager-while-working-computer-data-center_482257-113584.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740'
    }
];

const FAQSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="md" sx={{ bgcolor: "#fff" }}>


            {faqData.map((faq, index) => {
                const panelId = `panel${index}`;
                const isOpen = expanded === panelId;

                return (
                    <Accordion
                        key={panelId}
                        expanded={isOpen}
                        onChange={handleChange(panelId)}
                        sx={{
                            mb: 2,
                            borderRadius: 0,
                            p: 2,
                            borderBottom: "1px solid grey",
                            boxShadow: 0,
                            backgroundColor: '#fafafa',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                // <IconButton sx={{ border: 1 }} size="small">
                                isOpen ? <RemoveOutlined sx={{ border: 1, borderRadius: 5 }} /> : <AddOutlined sx={{ border: 1, borderRadius: 5 }} />
                                // </IconButton>
                            }
                            aria-controls={`${panelId}-content`}
                            id={`${panelId}-header`}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                width="100%"
                                gap={2}
                            >
                                {/* Number on the left */}
                                <Typography variant="h4" fontWeight={500} color="secondary.main">
                                    {index + 1}.
                                </Typography>

                                {/* Question on the right */}
                                <Typography variant="h5" sx={{ color: "text.primary", ml: 2 }} fontWeight={500}>
                                    {faq.question}
                                </Typography>
                            </Box>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={3}
                                alignItems="flex-start"
                                mt={2}
                            >
                                {/* Image */}
                                <Box
                                    component="img"
                                    src={faq.image}
                                    alt={faq.question}
                                    sx={{
                                        width: { xs: '100%', md: 300 },
                                        maxHeight: 250,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        boxShadow: 1,
                                    }}
                                />

                                {/* Text */}
                                <Box
                                    display="flex"
                                    flexDirection='column'
                                    alignItems="start"
                                    justifyContent='space-evenly'
                                    width="100%"
                                    gap={2}
                                >

                                    <Typography variant="caption" component='div' color="text.secondary" sx={{ fontSize: { xs: '1rem', md: "1rem" } }}>
                                        {faq.answer}
                                    </Typography>

                                    {/* Question on the right */}
                                    <Typography variant="caption" sx={{ color: "text.primary", ml: 2, fontSize: { xs: '1rem', md: "1rem" } }} fontWeight={600}>
                                        Click Here <IconButton sx={{ bgcolor: "primary.main", color: "white", ml: 3 }}><ArrowForward /> </IconButton>
                                    </Typography>
                                </Box>

                            </Stack>
                        </AccordionDetails>


                    </Accordion>
                );
            })}
        </Container>
    );
};

export default FAQSection;

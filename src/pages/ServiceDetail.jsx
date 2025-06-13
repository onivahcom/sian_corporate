import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Grid,
    Box,
    Button,
    Chip,
    Divider,
    Stack
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const serviceData = [
    {
        slug: "it-solutions",
        title: "IT Solutions",
        subtitle: "IG offers innovative software products alongside cost-efficient, custom IT services. Whether you require off-the-shelf solutions or bespoke software developed from the ground up, our expertise is dedicated to supporting and advancing your business objectives.",
        subtitle2: "Our comprehensive IT solutions enable businesses to innovate and scale by effectively addressing their unique challenges with agility and precision. ",
        image: "https://img.freepik.com/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_53876-102617.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740",
        tags: ["Cloud", "AI/ML", "Web Apps", "Security"],
        highlights: [
            { id: 100, title: 'Artificial Intelligence Services', description: 'Tailor-made AI Chatbot, Voice Assistant, Prediction & Analysis tools, and more as per client requirements.' },
            { id: 1, title: 'Custom Software Development', description: 'Tailor-made software solutions crafted to perfectly fit your business needs and challenges.' },
            { id: 2, title: 'Web Application Development', description: 'Modern, responsive web apps designed to boost your online presence and enhance user experience' },
            { id: 3, title: 'Mobile App Development', description: 'High-performance mobile apps for iOS and Android, built to engage your customers on the go.' },
            { id: 4, title: 'Software Consulting', description: 'Expert guidance to help you strategize, plan, and execute successful software projects.' },
            { id: 5, title: 'Cloud Solutions & Migration', description: ' Seamless transition to the cloud to improve scalability, security, and reduce costs.' },
            { id: 6, title: 'Software Integration', description: 'Connecting your existing software systems for smooth, efficient business operations.' },
            { id: 7, title: 'API Development & Integration', description: 'Robust API creation and integration to enable seamless communication between platforms.' },
            { id: 8, title: 'UI/UX Design', description: 'Intuitive and attractive interfaces crafted to deliver the best user experience.' },
            { id: 9, title: 'QA & Testing Services', description: 'Comprehensive testing to ensure your software is reliable, secure, and bug-free.' },
            { id: 10, title: 'Maintenance & Support', description: 'Ongoing updates, troubleshooting, and technical support to keep your software running smoothly.' },
            { id: 11, title: 'Enterprise Software Solutions', description: 'Powerful ERP, CRM, and other enterprise-grade software to streamline your business processes.' },
            { id: 12, title: 'DevOps & Automation', description: 'Optimizing development and deployment pipelines for faster, more reliable software delivery' },
            { id: 13, title: 'Data Analytics & Business Intelligence', description: 'Transform raw data into actionable insights for smarter business decisions.' },
            { id: 14, title: 'Cybersecurity Solutions', description: 'Protect your digital assets with advanced security measures and threat prevention.' },
        ],
    },
    {
        slug: "R&D-and-Training",
        title: "R&D and Training",
        subtitle: "At IG, we specialize in providing reliable and skilled contract labour solutions tailored to meet the dynamic workforce needs of your business. With over 9 years of trusted experience supplying contract labour to hospitals in Pondicherry, we have built a strong reputation for delivering quality and dependaOur R&D and Training division, led by Dr. Napthaline Gerard, PhD - Artificial Intelligence in Healthcare, focuses on fostering innovation through hands-on technical education and applied research in both Information Technology and Electronics.  ",
        subtitle2: "We offer a practical learning environment where engineering students, interns, and professionals can gain real-world experience in software development, embedded systems, IoT, and AI-driven applications. Our programs are designed to bridge the gap between academic knowledge and industry requirements through guided projects, prototyping, and mentorship.        ",
        image: "https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740",
        tags: ["Cloud", "AI/ML", "Web Apps", "Security"],
        highlights: [
            {
                title: "Internship and Technical Training Programs",
                description: "Hands-on internships and expert-led training designed to bridge academic knowledge with real-world applications.",
            },
            {
                title: "Research & Development in AI, Data Science, and IoT",
                description: "Encouraging innovation through guided R&D projects in cutting-edge technologies like AI, IoT, and Data Science.",
            },
            {
                title: "Embedded Systems & Microcontroller-Based Project Support",
                description: "Support and training for building reliable embedded systems and microcontroller-based solutions for real-world problems.",
            },
            {
                title: "Application of AI in Healthcare, Automation, and BI",
                description: "Training on applying AI in practical sectors like healthcare, industrial automation, and business intelligence.",
            },
            {
                title: "Web, Mobile, and Cloud-Based Solution Development",
                description: "Learn to develop full-stack applications with modern web, mobile, and scalable cloud technologies.",
            },
            {
                title: "End-to-End Prototype Development (Hardware + Software)",
                description: "From ideation to functional prototypes — integrating both hardware and software for a complete solution.",
            },
            {
                title: "Real-Time Data Processing & Dashboard Implementation",
                description: "Master real-time data pipelines, analytics, and build intuitive dashboards for monitoring and insights.",
            },
            {
                title: "Collaboration with Academic Institutions",
                description: "Partnering with colleges to support students in completing innovative and impactful final year projects.",
            },
            {
                title: "Mentorship for Startup Ideas and Innovation Projects",
                description: "Guided mentorship to help shape early-stage ideas into scalable innovations or startup ventures.",
            },
        ],
    },
    {
        slug: "labour-supply-under-contract",
        title: "Labour Supply Under Contract",
        subtitle: "At IG, we specialize in providing reliable and skilled contract labour solutions tailored to meet the dynamic workforce needs of your business. With over 9 years of trusted experience supplying contract labour to hospitals in Pondicherry, we have built a strong reputation for delivering quality and dependability.        ",
        subtitle2: "Whether you require temporary staffing for short-term projects or long-term contract workers, our extensive network ensures you get the right talent at the right time.        ",
        image: "https://img.freepik.com/free-photo/man-safety-equipment-work_23-2148976356.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740",
        tags: ["Cloud", "AI/ML", "Web Apps", "Security"],
        highlights:
            [
                { id: 1, title: 'Deliver Skilled Workforce', description: 'We carefully vet and provide qualified personnel across various industries, ensuring they have the expertise and experience needed for your specific projects.        ' },
                { id: 2, title: 'Ensure Timely Deployment', description: 'We understand the importance of meeting project deadlines. Our efficient recruitment and deployment process guarantees that your workforce demands are fulfilled promptly without compromising quality.' },
                { id: 3, title: 'Maintain Compliance & Safety', description: ' We adhere strictly to industry standards, labour laws, and safety regulations, ensuring that all contract workers meet legal requirements and maintain a safe working environment.' },
                { id: 4, title: 'Flexible Staffing Solutions', description: 'Whether you need workers for a few days, weeks, or months, we tailor our labour supply services to align perfectly with your business timelines and budget.' },
                { id: 5, title: 'Ongoing Support & Management', description: 'Our team provides continuous support and management for all contract labour, handling payroll, documentation, and any issues that arise during the contract period.' },
            ],
    },
    {
        slug: "global-trading",
        title: "Global Trading",
        subtitle: "We offer comprehensive import and export services designed to simplify your international trade operations. With proven experience exporting goods to France and other global markets, we ensure your shipments move smoothly and compliantly across borders.        ",
        subtitle2: "Whether you’re a small business or a large corporation, our expertise guarantees efficient and reliable handling of your international shipments.        ",
        image: "https://img.freepik.com/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663057.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740",
        tags: ["Cloud", "AI/ML", "Web Apps", "Security"],
        highlights: [
            { id: 1, title: 'Documentation & Compliance', description: 'We manage all essential trade documentation and ensure compliance with international regulations to avoid delays and penalties.' },
            { id: 2, title: 'Shipment Tracking & Management', description: 'Stay informed with real-time tracking and updates on your cargo, from origin to destination.' },
            { id: 3, title: 'Customs Clearance Support', description: ' Our knowledgeable team works closely with customs authorities to facilitate swift clearance of your goods.' },
            { id: 4, title: 'Logistics Coordination', description: 'We coordinate with trusted freight forwarders, carriers, and warehouses to optimize shipping routes and reduce costs.' },
            { id: 5, title: 'Risk Management', description: 'We identify potential risks in your supply chain and implement strategies to mitigate disruptions.' },
        ],
    },
    {
        slug: "hospitality-services",
        title: "Hospitality Services",
        subtitle: "WIN IG, we provide tailored hotel management solutions designed to elevate the guest experience and streamline your hotel operations. From boutique hotels to large resorts, our services help you manage every aspect efficiently.        ",
        subtitle2: "",
        image: "https://img.freepik.com/free-photo/care-job-scene-with-senior-patient-being-cared_23-2151224188.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740",
        tags: ["Cloud", "AI/ML", "Web Apps", "Security"],
        highlights: [
            { id: 1, title: 'Reservation & Booking Management', description: 'Simplify bookings with integrated systems that handle online reservations, cancellations, and room assignments effortlessly.' },
            { id: 2, title: 'Guest Services & CRM', description: 'Enhance guest satisfaction with personalized services, loyalty programs, and effective communication tools.' },
            { id: 3, title: 'Billing & Payment Processing', description: ' Secure and seamless billing solutions that handle multiple payment methods, invoicing, and financial reporting.' },
            { id: 4, title: 'Operational Efficiency', description: 'Tools to manage housekeeping, maintenance, staff scheduling, and inventory, ensuring smooth day-to-day operations' },
            { id: 5, title: 'Analytics & Reporting', description: 'Gain insights into occupancy rates, revenue trends, and guest preferences to make informed business decisions.' },
        ],
    },
    // Add other services here...
];

const ServiceDetail = () => {
    const { servicename } = useParams();
    const service = serviceData.find(s => s.slug === servicename);

    if (!service) {
        return (
            <Container sx={{ py: 10 }}>
                <Typography variant="h4">Service not found.</Typography>
            </Container>
        );
    }

    return (
        <>
            <Header />


            {/* <div className=" text-black  py-16"> */}

            <Container maxWidth="xl" sx={{ bgcolor: "white", py: 10, borderRadius: 3 }}>
                <Grid container spacing={6} alignItems="center" sx={{ p: { xs: 2, md: 6 } }}>
                    {/* Left Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography variant="h3" fontWeight={700} gutterBottom color="primary">
                                {service.title}
                            </Typography>

                            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 2 }}>
                                {service.subtitle}
                            </Typography>

                            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
                                {service.subtitle2}
                            </Typography>

                            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                                {service.tags.map((tag) => (
                                    <Chip key={tag} label={tag} variant="outlined" />
                                ))}
                            </Box> */}

                            <Button variant="contained" size="large" color="primary">
                                Let's Collaborate
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={service.image}
                            alt={service.title}
                            sx={{
                                width: '100%',
                                height: { xs: 250, md: 320 },
                                objectFit: 'cover',
                                borderRadius: 3,
                                boxShadow: 0,
                            }}
                        />
                    </Grid>
                </Grid>


                <Divider sx={{ my: 8 }} />

                <Typography variant="h4" align="center" color="primary" gutterBottom>What We Offer</Typography>

                <Grid container spacing={4} sx={{ mt: 4, p: { xs: 0, md: 6 } }}>
                    {service.highlights.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6 }} >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'flex-start',
                                    backgroundColor: 'rgba(0,0,0,0.03)',
                                    p: 3,
                                    borderRadius: 2,
                                    height: '100%',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    },
                                }}
                            >
                                {/* Icon Circle */}
                                <Box
                                    sx={{
                                        mt: 0.5,
                                        color: 'primary.main',
                                        backgroundColor: 'white',
                                        borderRadius: '50%',
                                        p: 1,
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <CheckCircleOutlineIcon fontSize="medium" />
                                </Box>

                                {/* Text Content */}
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>


            </Container>

            {/* </div> */}

            <Footer />
        </>
    );
};

export default ServiceDetail;
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Website",
        description: "A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
        image: "/images/e-commerce.jpg",
    },
    {
        title: "Portfolio Website",
        description: "A portfolio website for personal details includes the skills, experiences, education, and projects.",
        image: "/images/portfolio.webp",
    },
    {
        title: "Blogging Platform",
        description: "A platform for posting and reading blogs. Users have access to post, like, and comment on blogs.",
        image: "/images/blog.avif",

    },
    {
        title: "Real Time Online Booking",
        description: "A real-time online booking website for a temple with the details of all the poojas, online booking with the administration module",
        image: "/images/booking.jpg",
    },
    {
        title: "Educational Website",
        description: "An online tutorial website with tutorials on specific subjects. And can attend online quizes related to specific subjects.",
        image: "/images/tutorial.webp",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
    return (
        <Box sx={{ py: 8, px: 4, color: "#fff" }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                {projects.map((project, idx) => (
                    <Grid size={{ xs: 12, md: 4, sm: 4 }}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <Card
                                sx={{
                                    bgcolor: "#334155",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 5,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                                        {project.description}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

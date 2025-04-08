import { Box, Container, Grid, Typography } from "@mui/material";

export const Education = () => {
    return (
        <Box sx={{ color: 'text.primary', paddingTop: 14 }}>
            <Container>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    Education
                </Typography>
                <Grid container spacing={4} sx={{ paddingTop: 4 }}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography color="gray"> 2012 - 2016</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant="h6" fontWeight="bold">
                            B. Tech in Computer Science and engineering
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            College of Engineering Kottarakkara
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            CUSAT University
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}
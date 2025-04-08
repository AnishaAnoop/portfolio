import React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Paper,
} from '@mui/material';

export const Contact = () => {
    return (
        <Box
            component="section"
            sx={{
                py: 14,
                px: 2,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: '100%' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
                    Contact Me
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="First Name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="Email" variant="outlined" type="email" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Button variant="contained" fullWidth size="large">
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

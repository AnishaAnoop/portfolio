import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" color="text.primary">
                © {new Date().getFullYear()} Anisha C S. All rights reserved.
            </Typography>
        </Box>
    );
};
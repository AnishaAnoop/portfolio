import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Anisha C S. All rights reserved.
            </Typography>
        </Box>
    );
};
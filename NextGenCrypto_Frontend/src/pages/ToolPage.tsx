import { Box, Button, Typography, TextField, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

// API server URL (local connection)
const API_BASE_URL = import.meta.env.VITE_BACKEND_BASEURL ?? "http://127.0.0.1:5555";

const ToolPage: React.FC = () => {
    const [url, setUrl] = useState<string>(""); 
    const [jsonData, setJsonData] = useState<string>(""); 
    const [error, setError] = useState<string | null>(null); 

    const [open, setOpen] = useState<boolean>(false); 
    const [popupText, setPopupText] = useState<string>("This is a Warning!"); 
    useEffect(() => {
        setPopupText("Warning: This tool is in the experimental stage and may be unstable. It stores your data. Please use the tool only if you agree to this."); 
        setOpen(true); 
    }, []);

    const handleFetchApi = async () => {
        setError(null); 
        setJsonData(""); 
    
        if (!url) {
            setError("Please enter a valid URL.");
            return;
        }
    
        try {
            // The URL is now used as a query parameter in the POST request
            const response = await axios.post(`${API_BASE_URL}/server-info?url=${encodeURIComponent(url)}`);
            setJsonData(JSON.stringify(response.data, null, 2)); 
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    setError(`Fehler ${err.response.status}: ${err.response.statusText}`);
                } else if (err.request) {
                    setError("No response from the server. Check the URL or your network connection.");
                } else {
                    setError("Error with the request. Check the URL and try again.");
                }
            } else {
                setError("An unexpected error has occurred.");
                setOpen(true); 
            }
        }
    };
    
    
    
    
    const handleClose = () => {
        setOpen(false); // Close the dialog
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h2" gutterBottom>Post Quantum Cryptography</Typography>
            <Box sx={{ marginBottom: 10 }} />
            <Typography variant="h3" gutterBottom>Welcome to the URL Checker!</Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 1 }}>
                <p>
                This tool checks which server is behind your URL and gives you a tip on how to make it PQC-ready, ensuring you're prepared for the future.
                </p>
            </Typography>



            <Typography variant="body1" gutterBottom>Check your URL</Typography>
            {/* Input field for the URL */}
            <TextField
                fullWidth
                label="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 2 }}
                error={Boolean(error)}
            />

            {/* Button to call up the API */}
            <Button variant="contained" onClick={handleFetchApi} sx={{ backgroundColor: 'white', color: 'black', '&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.8)', }}}>
            Retrieve API
            </Button>

            {/* Error message (if available) */}
            {error && (
                <Alert severity="error" sx={{ marginTop: 2 }}>
                    {error}
                </Alert>
            )}

            {/* Text field to display the JSON data */}
            {jsonData && (
                <TextField
                    fullWidth
                    multiline
                    minRows={10}
                    value={jsonData}
                    variant="outlined"
                    sx={{ marginTop: 2, whiteSpace: 'pre-wrap' }}
                />
            )}

            {/* Dialog Popup */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {popupText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ marginBottom: 20 }} />
        </Box>
        
    );
};

export default ToolPage;

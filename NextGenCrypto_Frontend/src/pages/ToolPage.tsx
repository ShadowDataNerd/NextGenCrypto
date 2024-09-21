import { Box, Button, Typography, TextField, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

// API Server URL (lokale Verbindung)
const API_BASE_URL = import.meta.env.VITE_BACKEND_BASEURL ?? "http://127.0.0.1:5555";

const ToolPage: React.FC = () => {
    const [url, setUrl] = useState<string>(""); // User-input für die URL
    const [jsonData, setJsonData] = useState<string>(""); // API response data
    const [error, setError] = useState<string | null>(null); // Error state

    const [open, setOpen] = useState<boolean>(false); // State to control the popup
    const [popupText, setPopupText] = useState<string>("Dies ist eine Warnung!"); // Text for the popup

    useEffect(() => {
        setPopupText("Achtung: Dieses Tool ist experimentell und kann instabil sein."); // Set the warning message for the popup
        setOpen(true); // Opens the popup when the page loads
    }, []);

    const handleFetchApi = async () => {
        setError(null); // Reset error state
        setJsonData(""); // Reset JSON data
    
        if (!url) {
            setError("Bitte geben Sie eine gültige URL ein.");
            return;
        }
    
        try {
            // Die URL wird jetzt als Query-Parameter in der POST-Anfrage verwendet
            const response = await axios.post(`${API_BASE_URL}/server-info?url=${encodeURIComponent(url)}`);
            setJsonData(JSON.stringify(response.data, null, 2)); // JSON-Daten formatieren
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response) {
                    setError(`Fehler ${err.response.status}: ${err.response.statusText}`);
                } else if (err.request) {
                    setError("Keine Antwort vom Server. Überprüfen Sie die URL oder Ihre Netzwerkverbindung.");
                } else {
                    setError("Fehler bei der Anfrage. Überprüfen Sie die URL und versuchen Sie es erneut.");
                }
            } else {
                setError("Ein unerwarteter Fehler ist aufgetreten.");
                setOpen(true); // Öffnet den Warn-Dialog bei Fehlern
            }
        }
    };
    
    
    
    
    const handleClose = () => {
        setOpen(false); // Close the dialog
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h2" gutterBottom>Post Quantum Cryptography</Typography>
            <Typography variant="body1" gutterBottom>Check your URL</Typography>

            {/* Eingabefeld für die URL */}
            <TextField
                fullWidth
                label="API-URL eingeben"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 2 }}
                error={Boolean(error)}
            />

            {/* Button, um die API abzurufen */}
            <Button variant="contained" color="primary" onClick={handleFetchApi}>
                API abrufen
            </Button>

            {/* Error-Message (wenn vorhanden) */}
            {error && (
                <Alert severity="error" sx={{ marginTop: 2 }}>
                    {error}
                </Alert>
            )}

            {/* Textfeld, um die JSON-Daten anzuzeigen */}
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
                <DialogTitle id="alert-dialog-title">Warnung</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {popupText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Schließen
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ToolPage;

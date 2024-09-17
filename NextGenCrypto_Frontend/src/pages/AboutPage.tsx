import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";




const AboutPage = () => {

    const navigate = useNavigate();
    const handleOnClick = () =>{
      navigate("/");

    } 

    return <Box>
    <h1>Post Quantum Cryptography</h1>
    <Typography>About me</Typography>
    <Button onClick={handleOnClick} variant='contained' color='secondary'>Startseite</Button>
      
</Box>

};

export default AboutPage
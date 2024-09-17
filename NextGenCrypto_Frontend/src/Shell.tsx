import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

interface ShellProps {
    children?: ReactNode
}

export const Shell = (props: ShellProps) => {
    
    const navigate = useNavigate();
    const handleOnClickIndex = () =>{
      navigate("/");

    }
    const handleOnClick = () =>{
      navigate("/about");

    }
    const handleOnClickHome = () =>{
        navigate("/home");
  
      }

    const handleOnClickPQC = () =>{
        navigate("/pqc");
  
      }

    const handleOnClickTool = () =>{
        navigate("/tool");
  
      }
    
    return (
        <>
        <Box component="header" sx={{flexGrow: 1}}>
            <AppBar>
                <Toolbar sx={{ justifyContent: 'center', gap: 5 }}>
                   
                    <Box sx={{ position: 'absolute', left: 400 }}>
                            <img 
                                src="/pqci_image002_transparent.png" 
                                alt="Logo" 
                                style={{ width: '50px', height: '50px', marginRight: '16px' }} 
                            />
                    </Box>
                    <Button onClick={handleOnClickHome} color='inherit' sx={{ fontSize: '1rem', padding: '12px 20px' }} >Home</Button>
                    <Button onClick={handleOnClick} color='inherit' sx={{ fontSize: '1rem', padding: '12px 20px' }} >About</Button>
                    <Button onClick={handleOnClickPQC} color='inherit' sx={{ fontSize: '1rem', padding: '12px 20px' }} >FAQ</Button>
                    <Button onClick={handleOnClickTool} color="inherit" sx={{ fontSize: '1rem', padding: '12px 20px' }} >Tool</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Container>{props.children}</Container>
        <Box component="footer" sx={{textAlign: "center"}}>Copyright by Christoper Otto (c) 2024
        </Box>
        </>
        
    );
    
};
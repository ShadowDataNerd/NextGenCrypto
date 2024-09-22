import { Box, Link, Typography } from "@mui/material";




const AboutPage = () => {


    return <Box>
    <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 0, marginTop: 0, padding: 1 }}>About Me</Typography>
    <Box sx={{ marginBottom: 1}} />
    <Typography sx={{ display: 'flex', marginBottom: 3, padding: 1 }}>
      <p>
      Welcome to my website! My name is Christopher Otto, and I am a Master's student in Applied Computer Science at the Flensburg University of Applied Sciences. This website is part of a project for the course Cryptographic Algorithms and aims to introduce you to the fascinating world of encryption technologies.
      The idea behind this project is to show you that modern cryptography, particularly Post-Quantum Cryptography (PQC), is not just an abstract research topic but will play a crucial role in the security of our digital world in the near future. Here, you will find information on various cryptographic methods, such as Kyber and other PQC algorithms, which have the potential to revolutionize our current understanding of data security.
      Enjoy exploring and learning!
      </p>
    </Typography>
    <Box>
    <Link href="https://github.com/ShadowDataNerd/" target="_blank" rel="noopener">Here is my GitHub</Link>
    </Box>
    <Box sx={{ marginBottom: 30 }} />
      
</Box>

};

export default AboutPage
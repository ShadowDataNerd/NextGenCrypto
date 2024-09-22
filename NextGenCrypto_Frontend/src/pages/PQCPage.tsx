import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



const PQCPage = () =>{
    


    

    return <Box>
        <Box sx={{ marginBottom: 10 }} />
        <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>FAQ</Typography>
        <Box sx={{ padding: 1 }}></Box>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Frequently asked questions about post-quantum cryptography</Typography>
        

        
        
    <Box>
      <Typography sx={{marginTop: 2, marginBottom: 2}}>
      The development of quantum computing technology is advancing rapidly and poses a growing threat to conventional cryptographic methods. Post-Quantum 
      Cryptography (PQC) offers a solution: it aims to develop encryption methods that can withstand attacks from future quantum computers. This FAQ page is 
      designed to answer basic questions about Post-Quantum Cryptography, particularly for companies, CTOs, and security officers preparing for this upcoming 
      challenge.

      </Typography>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', marginBottom: 1, marginTop: 2, padding: 0 }}>Disclaimer:</Typography>
      <Typography sx={{marginTop: 1, marginBottom: 2}}>
        
          
      The information on this page is based on current recommendations and publications from the Federal Office for Information Security (BSI) and the National 
      Institute of Standards and Technology (NIST). However, it is important to note that the topic of Post-Quantum Cryptography is a highly dynamic and rapidly 
      evolving field. New insights and developments can quickly render this information outdated. Therefore, we recommend regularly consulting up-to-date reports 
      from official bodies such as BSI and NIST.

      </Typography>


    </Box>
    <Box sx={{ padding: 1 }}></Box>

    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          1. What is post-quantum cryptography?
        </AccordionSummary>
        <AccordionDetails>
          
        Post-Quantum Cryptography (PQC) refers to a set of cryptographic algorithms that are resistant to attacks by quantum computers. 
        These algorithms are based on mathematical problems that cannot be efficiently solved, even with the immense computational power of quantum computers. 
        The goal is to ensure data integrity and confidentiality in a world where powerful quantum computers exist.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          2. Why are conventional cryptographic methods threatened by quantum computers?
        </AccordionSummary>
        <AccordionDetails>
        Conventional cryptographic algorithms like RSA and elliptic curve cryptography (ECC) are based on the difficulty of solving certain mathematical 
        problems (e.g., factoring large numbers). Quantum computers, particularly through Shor's algorithm, could solve these problems efficiently, thereby 
        compromising the security of these algorithms. This means that a sufficiently powerful quantum computer could break these encryptions.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          3. How do quantum computers work and why do they pose a threat?
        </AccordionSummary>
        <AccordionDetails>
        Quantum computers leverage the principles of quantum mechanics, such as superposition and entanglement, to perform computations. 
        While classical computers store information in bits (0 or 1), quantum computers use qubits, which can exist in multiple states simultaneously. 
        This property allows quantum computers to perform certain computations, like factoring large numbers, exponentially faster than classical computers.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          4. Which algorithms are considered quantum-safe?
        </AccordionSummary>
        <AccordionDetails>
        There are several promising quantum-safe algorithms currently being evaluated as part of the NIST standardization process. 
        These include algorithms based on lattice-based, code-based, and multivariate systems. Examples include CRYSTALS-Kyber for key exchange and 
        CRYSTALS-Dilithium for digital signatures.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          5. How long will it be before quantum computers can break conventional cryptography?
        </AccordionSummary>
        <AccordionDetails>
        Estimates suggest that it may take another 10 to 15 years to develop a fully functional quantum computer capable of breaking common cryptosystems. 
        However, research and development in this field is progressing rapidly, making it difficult to provide precise predictions.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          6. How does post-quantum cryptography differ from classical cryptography?
        </AccordionSummary>
        <AccordionDetails>
        The main difference lies in the mathematical problems on which the security of the algorithms is based. 
        Classical cryptosystems often rely on problems like factoring large numbers or the discrete logarithm, whereas PQC is based on more complex problems 
        such as solving lattice problems, isogeny-based approaches, or multivariate polynomials. These problems remain difficult even for quantum computers.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          7. What steps are organisations such as the BSI and NIST taking to standardise post-quantum cryptography?
        </AccordionSummary>
        <AccordionDetails>
        Both BSI and NIST are actively working on the research and standardization of post-quantum cryptography. 
        Since 2016, NIST has been leading a competition to select the most robust quantum-safe algorithms. In parallel, 
        BSI provides guidelines for companies and organizations on how to plan and implement the transition to quantum-secure solutions.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          8. How can companies and governments prepare for the era of quantum computing?
        </AccordionSummary>
        <AccordionDetails>
        Companies and governments should begin preparing early for the transition to quantum-safe algorithms. 
        This means reviewing existing cryptographic infrastructures, implementing hybrid systems (that use both classical and quantum-safe algorithms), 
        and developing a long-term plan for transitioning to post-quantum cryptography.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          9. Are the current encryptions we use every day in danger?
        </AccordionSummary>
        <AccordionDetails>
        Yes, but not immediately. Most of today’s encryption methods are vulnerable to quantum attacks, but as long as large-scale quantum computers do not yet exist, 
        these systems remain secure. However, it is recommended to start preparing for quantum-safe solutions now to ensure long-term data security.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          10. What should developers and IT security professionals do now to prepare for post-quantum cryptography?
        </AccordionSummary>
        <AccordionDetails>
        IT security professionals should familiarize themselves with developments in the field of post-quantum cryptography and actively 
        plan the transition to quantum-safe algorithms. Implementing hybrid systems that use both classical and PQC algorithms is a recommended strategy. 
        Additionally, cryptographic infrastructure should be regularly reviewed and made future-proof.
        </AccordionDetails>
      </Accordion>
      

      
    </div>
    <Box sx={{ marginBottom: 12 }} />


        
  


    </Box>
};

export default PQCPage
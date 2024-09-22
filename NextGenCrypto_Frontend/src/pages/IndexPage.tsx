import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography, Snackbar, TextField, ListItem, List, ListItemText, Link } from "@mui/material"
import { useState } from "react";


function TabPanel(props: { children?: React.ReactNode, value: number, index: number }) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function TabPanelDilithium(props: { children?: React.ReactNode, value: number, index: number }) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanelDilithium" hidden={value !== index} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }



const IndexPage = () =>{
    




    const [kyberTabIndex, setKyberTabIndex] = useState(0); // Kyber tab state
    const [dilithiumTabIndex, setDilithiumTabIndex] = useState(0); // Dilithium tab state
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false); // Snackbar State
    const [snackbarMessage, setSnackbarMessage] = useState<string>(''); // Snackbar-Nachricht


    // Installation commands for various sections
    const sectionCommands = {
        "kyber": [
            { label: 'Installiere kyber', command: 'git clone https://github.com/pq-crystals/kyber.git && cd kyber/ref && make && cd ../avx2 && make' },
            
            
        ],
        "dilithium": [
            { label: 'Installiere dilithium', command: 'git clone https://github.com/pq-crystals/dilithium.git && cd dilithium/ref && make && cd ../avx2 && make' },
            
        ],
        "openssl1": [
            { label: 'Step 1', command: 'brew install openssl' },
            { label: 'Step 2', command: 'export CFLAGS="-I/usr/local/opt/openssl@1.1/include" && export NISTFLAGS="-I/usr/local/opt/openssl@1.1/include" && export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"' },
            { label: 'Step 3', command: 'make' },
            { label: 'Step 4', command: 'test/test_kyber$ALG && test/test_vectors$ALG && test/test_speed$ALG' }
        ],
        "openssl2": [
            { label: 'Step 1', command: 'make shared' },
            { label: 'Step 2', command: 'libpqcrystals_kyber$ALG_ref.so' },
            { label: 'Step 3', command: 'mlibpqcrystals_aes256ctr_ref.so && libpqcrystals_fips202_ref.so' },
            
        ]
    };
    
        const handleKyberTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setKyberTabIndex(newValue); // Kyber tab change
    };
        const handleDilithiumTabChange = (_event: React.SyntheticEvent, newValue: number) => {
            setDilithiumTabIndex(newValue); // Dilithium tab change
    };

    // Function to copy the command to the clipboard
    const handleCopyToClipboard = (command: string) => {
        navigator.clipboard.writeText(command)
            .then(() => {
                setSnackbarMessage(`Command "${command}" was copied to the clipboard!`);
                setSnackbarOpen(true); 
            })
            .catch(err => {
                console.error('Error when copying: ', err);
            });
    };
    
    
    // Help function to generate the fields under the sections
    const renderCommandFields = (commands: { label: string, command: string }[]) => (
        commands.map((cmd, index) => (
            <Paper key={index} sx={{ marginTop: 3, padding: 2 }}>
                <Typography variant="h6">{cmd.label}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextField
                      fullWidth
                      label=""
                      value={cmd.command}
                      InputProps={{
                        readOnly: true, 
                      }}
                      variant="outlined"
                      sx={{ marginRight: 2 }}
                    />
                    <Button
                      variant="outlined" 
                      color="primary"
                      onClick={() => handleCopyToClipboard(cmd.command)}
                      sx={{
                        height: '100%', 
                        color: 'white',
                        borderColor: 'white', 
                        backgroundColor: 'transparent', 
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                        }
                      }}
                    >
                      Kopieren
                    </Button>
                </Box>
            </Paper>
        ))
    );


    return (
        <Box sx={{ padding: 3 }}>
            <Box sx={{ marginBottom: 10 }} />
            <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Welcome to the world of PQC</Typography>
            <Box sx={{ padding: 5 }}></Box>
            <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Are you ready for PQC?</Typography>
            

            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Imagine a world where the cryptography we know and trust today could be completely broken by a new technology. 
                This world may be closer than we think. Quantum computers, which are rapidly advancing, promise enormous progress in science and 
                technology but pose a serious threat to classical cryptography. To address this threat, researchers are developing a new field: 
                Post-Quantum Cryptography (PQC). But what exactly is PQC, and why is it so important? In this article, we will dive deep into the world of 
                Post-Quantum Cryptography and explain why it is essential in an increasingly digitalized society.
                </p>
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>But what can help?</Typography>
               
                The question of the security of cryptographic algorithms in a world with quantum computers is of critical importance. 
                To address this issue, NIST launched the Post-Quantum Cryptography competition. The goal is to identify algorithms that are secure against 
                attacks from quantum computers. The competition began in 2016 and went through several rounds, in which the submitted algorithms were evaluated 
                for security and efficiency. In July 2022, the first quantum-safe algorithms were selected, including Kyber for encryption and Dilithium for digital 
                signatures. These algorithms are expected to form the future standards in IT security.

                Additionally, the Federal Office for Information Security (BSI) also provides recommendations on post-quantum algorithms. 
                Particularly highlighted are lattice-based, code-based, and hash-based schemes, which are considered resilient to quantum attacks. 
                An example of this is the code-based algorithm Classic McEliece, which, despite its large key sizes, is recommended by the BSI due to its high level 
                of security. Hash-based signature schemes like SPHINCS+ are also recognized by the BSI, as they offer particularly strong security guarantees.  
                </p>
                
            </Typography>
            <Box>
                Quelle: <Link href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener">NIST.gov PQC Competition </Link>
            </Box>
            <Box sx={{ marginBottom: 8 }} />
          
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Post-quantum cryptography algorithms
                </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText
                            primary={
                            <>
                            <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Kyber
                            </Typography>
                                : A lattice-based algorithm for encryption and key exchange. It offers high security and efficiency and was selected as the primary standard for key exchange mechanisms in the NIST standardization process. Kyber leverages the difficulty of module lattice problems to enable secure communication.
                            </>
                            }
                            secondary={
                            <Link href="https://pq-crystals.org/kyber/index.shtml" target="_blank" rel="noopener">
                            PQ-crystals.org/kyber
                            </Link>
                            }
                            
                            
                            />
                        </ListItem>

                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Dilithium
                                </Typography>
                                : An algorithm for digital signatures that is also based on lattice-based cryptography, offering high performance and security. Dilithium is characterized by fast signature generation and verification, as well as moderate key and signature sizes. It is one of the leading candidates for standardization by NIST.
                            </>
                            }
                            secondary={
                            <Link href="https://pq-crystals.org/dilithium/index.shtml" target="_blank" rel="noopener">
                                PQ-crystals.org/dilithium
                            </Link>
                            }
                        />
                        </ListItem>

                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Falcon
                                </Typography>
                                : A lattice-based signature algorithm suitable for applications that require compact and efficient signatures. Falcon offers smaller signature and key sizes compared to other lattice-based algorithms, making it ideal for resource-constrained environments.
                            </>
                            }
                            secondary={
                                <Link href="https://falcon-sign.info/" target="_blank" rel="noopener">
                                    falcon-sign.info
                                </Link>
                            }
                        />
                        </ListItem>

                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                SPHINCS+
                                </Typography>
                                : A hash-based digital signature algorithm that is less efficient but offers extremely strong security guarantees. SPHINCS+ is independent of assumptions about the difficulty of specific mathematical problems, providing long-term security against quantum attacks.
                            </>
                            }
                            secondary={
                                <Link href="https://sphincs.org/" target="_blank" rel="noopener">
                                    sphincs.org
                                </Link>
                            }
                        />
                        </ListItem>

                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Classic McEliece
                                </Typography>
                                : A code-based encryption algorithm that is considered highly robust against quantum attacks but requires very large key sizes. Classic McEliece is based on the difficulty of decoding random linear codes and has a history of over 40 years without any known successful attacks.
                            </>
                            }
                            secondary={
                                <Link href="https://classic.mceliece.org/" target="_blank" rel="noopener">
                                    classic.mceliece.org
                                </Link>
                            }
                        />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                BIKE (Bit Flipping Key Encapsulation)
                                </Typography>
                                : A code-based key exchange mechanism that relies on cyclic codes. BIKE offers high security and efficiency and is a candidate in the NIST standardization process for post-quantum cryptography.
                            </>
                            }
                            secondary={
                                <Link href="https://bikesuite.org/" target="_blank" rel="noopener">
                                    bikesuite.org
                                </Link>
                            }
                        />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                HQC (Hamming Quasi-Cyclic)
                                </Typography>
                                : A code-based encryption algorithm that leverages the difficulty of decoding quasi-cyclic codes. HQC offers a good balance between security and performance and is also part of the NIST standardization process.
                            </>
                            }
                            secondary={
                                <Link href="https://pqc-hqc.org/" target="_blank" rel="noopener">
                                    pqc-hqc.org
                                </Link>
                            }
                        />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Rainbow
                                </Typography>
                                : A multivariate signature algorithm based on the difficulty of solving systems of nonlinear equations. Rainbow offers fast signature generation and verification but was not pursued further in the NIST process due to security concerns.
                            </>
                            }
                            secondary={
                                <Link href="https://www.pqcrainbow.org/" target="_blank" rel="noopener">
                                    pqcrainbow.org
                                </Link>
                            }
                        />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                FrodoKEM
                                </Typography>
                                : A lattice-based key exchange mechanism based on the Learning with Errors (LWE) problem. FrodoKEM offers high security without the use of structured lattice arithmetic, making it more resistant to certain types of attacks.
                            </>
                            }
                            secondary={
                                <Link href="https://frodokem.org/" target="_blank" rel="noopener">
                                    frodokem.org
                                </Link>
                            }
                        />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                NTRU
                                </Typography>
                                : Another lattice-based encryption algorithm that has been known since the 1990s. NTRU offers fast encryption and decryption times, along with moderate key sizes, and has been considered as an alternative candidate in the NIST process.
                            </>
                            }
                            secondary={
                                <Link href="https://www.ntru.org/" target="_blank" rel="noopener">
                                    ntru.org
                                </Link>
                            }
                        />
                        </ListItem>
                    </List>
            </Box>
            
            <Box>
                Quelle: <Link href="https://csrc.nist.gov/Projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions" target="_blank" rel="noopener">NIST.gov PQC Algorithmslist </Link>
            </Box>
            <Box sx={{ marginBottom: 8 }} />
                
            
          
            <Typography sx={{ display: 'flex', marginBottom: 0, padding: 0 }}>
              <p>
              To illustrate this better for you, I have researched the Kyber and Dilithium algorithms and present them to you here. You can find additional algorithms in the list of the NIST competition.
              </p>
              
            </Typography>
            <Box sx={{ marginBottom: 8 }} />



            <Typography variant="h3" gutterBottom>
                Kyber
            </Typography>

            


            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 0 }}>
              <p>
              Kyber is a cryptographic scheme developed as part of "Post-Quantum Cryptography" to resist attacks that could be possible with future quantum computers. It was designed as part of the competition launched by NIST (National Institute of Standards and Technology) to standardize post-quantum cryptography and is considered one of the most promising candidates. Kyber is based on the difficulty of the "Module Learning with Errors" (MLWE) problem, which is applied to lattice structures and is considered hard to solve, even for quantum computers.
              </p>
              
            </Typography>
            <Typography variant="h6" gutterBottom>
            How Kyber works
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Kyber is based on a specific mathematical problem known as "Learning With Errors" (LWE), which is used in its enhanced form in the module lattice application. The core principle of LWE is that it is extremely difficult to decipher a secret signal (such as a key) when it has been distorted by random "noise."
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Key generation
                                </Typography>
                                : The sender and receiver jointly generate a key pair consisting of a public and a private key. This is done using module lattices. The public key (pk = (A, t)) consists of a randomly generated matrix (A) and a vector (t = A * s + e), where (s) is the secret key and (e) is a small error vector.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Encryption
                                </Typography>
                                : The sender uses the public key (pk) to encrypt a message. The encryption is done by calculating the ciphertext (c = (u, v)), where (u = A^T * r + e_1) and (v = t^T * r + e_2 + m). Here, (r) and (e_1, e_2) are random values that increase security, and (m) is the message to be transmitted.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Decryption
                                </Typography>
                                : The receiver uses the secret key (s) to decrypt the ciphertext. This is done by calculating the message (m) as (m = v - u^T * s).
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                </p>
              
            </Typography>

            <Typography variant="h6" gutterBottom>
            Areas of application for Kyber
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Kyber is primarily used for asymmetric encryption, meaning the secure exchange of keys over insecure communication channels. This is crucial in a wide range of applications, including:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Secure communication on the Internet
                                </Typography>
                                : Today's web browsers use asymmetric cryptography to establish secure connections to websites (e.g., via TLS/SSL). With the growing threat posed by quantum computers, which could break traditional methods like RSA or ECC, Kyber is seen as a future standard to protect this communication.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Embedded systems and IoT devices
                                </Typography>
                                : Due to its efficiency and low resource requirements, Kyber is well-suited for use in devices with limited computing power and memory that still require secure communication.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Virtuel Private Network (VPN)
                                </Typography>
                                :  VPNs use asymmetric cryptography to exchange keys for encrypted communication between the user and the VPN server. Here too, Kyber offers a future-proof solution.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                Overall, Kyber provides a robust and efficient solution to the key exchange problem in a world where quantum computers could pose a 
                real threat to today's cryptography. Its mathematical foundations and implementation efficiency make it a promising candidate for a wide 
                range of applications that require long-term security.
                </p>
              
            </Typography>
            

            {/* Installation commands for introduction */}
            {renderCommandFields(sectionCommands.kyber)}
            <Box sx={{ marginBottom: 8 }} />

            <Typography sx={{ display: 'flex', marginBottom: 0, padding: 0 }}>
              <p>
              Here you will find some example applications in the programming languages Rust, Python, and Go. These examples are designed to help you better understand the implementation and use of the algorithms presented, and to apply them in your own projects.
              </p>
              
            </Typography>

          {/* Tab component for the selection of Go, Rust and Python */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={kyberTabIndex} onChange={handleKyberTabChange} centered>
                  <Tab label="Go" />
                  <Tab label="Rust" />
                  <Tab label="Python" />
              </Tabs>
          </Box>

          {/* TabPanel for Go */}
          <TabPanel value={kyberTabIndex} index={0}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Go Code Example</Typography>
                      <Typography variant="body1" component="pre">
                          {`
                            Using Kyber-K2SO

                            go get -u github.com/symbolicsoft/kyber-k2so
                            
                            package main
                            
                            import (
                                kyberk2so "github.com/symbolicsoft/kyber-k2so"
                                )

                            func main() {
                                privateKey, publicKey, _ := kyberk2so.KemKeypair768()
                                ciphertext, ssA, _ := kyberk2so.KemEncrypt768(publicKey)
                                ssB, _ := kyberk2so.KemDecrypt768(ciphertext, privateKey)
                                }
                            
                            Running Tests

                            > go test -v

                            === RUN   TestVectors512
                            --- PASS: TestVectors512 (0.01s)
                            === RUN   TestVectors768
                            --- PASS: TestVectors768 (0.01s)
                            === RUN   TestVectors1024
                            --- PASS: TestVectors1024 (0.01s)
                            === RUN   TestSelf512
                            --- PASS: TestSelf512 (0.19s)
                            === RUN   TestSelf768
                            --- PASS: TestSelf768 (0.30s)
                            === RUN   TestSelf1024
                            --- PASS: TestSelf1024 (0.46s)
                            PASS
                            ok  	github.com/symbolicsoft/kyber-k2so	1.140s

                            Running Benchmarks

                            > go test -bench=.

                            goos: linux
                            goarch: amd64
                            pkg: github.com/symbolicsoft/kyber-k2so
                            BenchmarkKemKeypair512-8    	   28116	     41519 ns/op
                            BenchmarkKemKeypair768-8    	   15864	     74150 ns/op
                            BenchmarkKemKeypair1024-8   	   10000	    105946 ns/op
                            BenchmarkKemEncrypt512-8    	   21409	     56336 ns/op
                            BenchmarkKemEncrypt768-8    	   13629	     87541 ns/op
                            BenchmarkKemEncrypt1024-8   	    9987	    131054 ns/op
                            BenchmarkKemDecrypt512-8    	   17650	     65348 ns/op
                            BenchmarkKemDecrypt768-8    	   12352	     99300 ns/op
                            BenchmarkKemDecrypt1024-8   	    8913	    140804 ns/op
                            PASS
                            ok  	github.com/symbolicsoft/kyber-k2so	16.180s


                            
                            `}
                        <Box>
                        Quelle: <Link href="https://github.com/symbolicsoft/kyber-k2so" target="_blank" rel="noopener">GitHub Go integration</Link>
                        </Box>
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanel>
          {/* TabPanel for Rust */}
          <TabPanel value={kyberTabIndex} index={1}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                  <Typography variant="h5">Rust Code Example</Typography>
                      
                      <Typography variant="body1" component="pre">
                          {`Installation

                          cargo add pqc_kyber
                          
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Usage

                          use pqc_kyber::*;

                          For optimisations on x86 platforms enable the avx2 feature and the following RUSTFLAGS:

                          export RUSTFLAGS="-C target-feature=+aes,+avx2,+sse2,+sse4.1,+bmi2,+popcnt"
                          
                          `}
                      </Typography>
                      
                      <Typography variant="body1" component="pre">
                          {`Key Encapsulation

                          // Generate Keypair
                            let keys_bob = keypair(&mut rng)?;

                            // Alice encapsulates a shared secret using Bob's public key
                            let (ciphertext, shared_secret_alice) = encapsulate(&keys_bob.public, &mut rng)?;

                            // Bob decapsulates a shared secret using the ciphertext sent by Alice 
                            let shared_secret_bob = decapsulate(&ciphertext, &keys_bob.secret)?;

                            assert_eq!(shared_secret_alice, shared_secret_bob);
                          
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Unilaterally Authenticated Key Exchange
                          
                            let mut rng = rand::thread_rng();

                            // Initialize the key exchange structs
                            let mut alice = Uake::new();
                            let mut bob = Uake::new();

                            // Generate Bob's Keypair
                            let bob_keys = keypair(&mut rng)?;

                            // Alice initiates key exchange
                            let client_init = alice.client_init(&bob_keys.public, &mut rng)?;

                            // Bob authenticates and responds
                            let server_response = bob.server_receive(
                            client_init, &bob_keys.secret, &mut rng
                            )?;

                            // Alice decapsulates the shared secret
                            alice.client_confirm(server_response)?;

                            // Both key exchange structs now have the same shared secret
                            assert_eq!(alice.shared_secret, bob.shared_secret);
                          
                          `}
                          </Typography>
                          <Typography variant="body1" component="pre">
                          {`Mutually Authenticated Key Exchange
                          
                            let mut alice = Ake::new();
                            let mut bob = Ake::new();

                            let alice_keys = keypair(&mut rng)?;
                            let bob_keys = keypair(&mut rng)?;

                            let client_init = alice.client_init(&bob_keys.public, &mut rng)?;

                            let server_response = bob.server_receive(
                            client_init, &alice_keys.public, &bob_keys.secret, &mut rng
                            )?;

                            alice.client_confirm(server_response, &alice_keys.secret)?;

                            assert_eq!(alice.shared_secret, bob.shared_secret);
                          
                          `}
                        <Box>
                            Quelle: <Link href="https://github.com/Argyle-Software/kyber" target="_blank" rel="noopener">GitHub Rust integration</Link>
                        </Box>
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanel>{/* TabPanel für Go */}
          <TabPanel value={kyberTabIndex} index={2}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Python Code Example</Typography>
                      <Typography variant="body1" component="pre">
                          {`Install
                          pip install pyky
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Usage
                          from ccakem import kem_keygen512, kem_encaps512, kem_decaps512

                            # Generate a key pair
                            priv_key, pub_key = kem_keygen512()

                            # Encapsulate using the public key
                            secret1, ciphertext = kem_encaps512(pub_key)

                            # Decapsulate using the private key to retrieve the secret
                            secret2 = kem_decaps512(priv_key, ciphertext)

                            # Verify the secrets match
                            assert secret1 == secret2
                            print("Shared secret successfully exchanged.")
                          `}
                      </Typography>
                      <Box>
                            Quelle: <Link href="https://github.com/asdfjkl/pyky" target="_blank" rel="noopener">GitHub Pyhton integration</Link>
                        </Box>
                  </CardContent>
              </Card>
            </TabPanel>
            <Box sx={{ marginBottom: 8 }} />
          
          
            <Typography variant="h3" gutterBottom>
                Dilithium
            </Typography>

            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
               
                The CRYSTALS-Dilithium algorithm is a digital signature algorithm designed to generate highly secure signatures that are resistant to attacks from quantum computers. The security of the algorithm is based on the difficulty of finding short vectors in lattices, a well-researched and widely considered secure mathematical problem.
                Dilithium was designed with the goal of being simple and secure to implement. Known risks from attacks on the generation of random secret values were minimized by avoiding the use of random values from the Gaussian distribution. Instead, Dilithium exclusively uses uniformly distributed random values, which significantly simplifies implementation and makes it more resistant to side-channel attacks.
                Another important design goal was the compactness of public keys and signatures. In many applications, such as certificate chains, both the public key and the signature must be transmitted. Dilithium minimizes the sum of these two parameters without compromising security. This makes the algorithm particularly suitable for resource-constrained environments where storage space and bandwidth are limited.
                The signature scheme is based on a so-called Fiat-Shamir with aborts approach, which has been used in cryptography for many years. It utilizes a combination of lattice-based algorithms to generate and verify secure signatures.
                </p>
            </Typography>
            <Typography variant="h6" gutterBottom>
            How dilithium works
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Dilithium is based on the mathematical concept of the "Fiat-Shamir with aborts" approach and utilizes the Module Learning-with-Errors (Module-LWE) problem, a hard-to-solve lattice problem. The signature algorithm operates in three steps:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Key generation
                                </Typography>
                                : First, a lattice structure in the form of a matrix A is generated. Then, the secret keys s_1 and s_2 are randomly generated, while the public key is determined by t = A * s_1 + s_2. The public key consists of the matrix A and a part of t, while the secret keys s_1 and s_2 are kept private.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Signature generation
                                </Typography>
                                : To sign a message M, the sender generates a random mask y and computes w = A * y. The signature z is then generated as z = y + c * s_1, where c is a hash-based challenge derived from the message M and a part of w.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Verification
                                </Typography>
                                : The verifier checks the signature by verifying whether the higher bits of the computed value A * z - c * t match and whether the hash challenge can be correctly reconstructed. This ensures that the signature is authentic and valid.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                </p>
              
            </Typography>

            <Typography variant="h6" gutterBottom>
            Areas of application for dilithium
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Dilithium is optimised for digital signatures and is used in many security-critical applications:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Software updates and code signatures
                                </Typography>
                                : Digital signatures, such as those generated by Dilithium, are used to ensure the integrity and authenticity of software updates. This is crucial to guarantee that the software has not been tampered with by an attacker.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Authentication protocols
                                </Typography>
                                : Dilithium is used in authentication protocols where it is important to verify the identity of a user or device, such as in IoT devices or secure communication systems.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Long-term safety
                                </Typography>
                                :  Since quantum computers could potentially break existing cryptographic methods like RSA and ECC in the future, Dilithium offers a solution for applications that require long-term security, such as in government or military systems.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                Dilithium offers an efficient and future-proof solution for digital signatures in an era where quantum computers pose an increasing threat. Its mathematical foundations make it one of the most promising algorithms for use in security-critical areas that require both high security and performance.
                </p>
              
            </Typography>

            {/* Installations-Befehle für Post-Quantum Kryptographie */}
          {renderCommandFields(sectionCommands.dilithium)}
          <Box sx={{ marginBottom: 8 }} />
          
          
          
          
          
          {/* Tab-Komponente für die Auswahl von Java, Rust und Python */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={dilithiumTabIndex} onChange={handleDilithiumTabChange} centered>
                  <Tab label="Drat" />
                  <Tab label="Rust" />
                  <Tab label="Java" />
              </Tabs>
          </Box>

          {/* TabPanel for Go */}
          <TabPanelDilithium value={dilithiumTabIndex} index={0}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Dart Code Example</Typography>
                      <Typography variant="body1" component="pre">
                          {`
                            import 'dart:convert';
                            import 'dart:math';
                            import 'dart:typed_data';

                            import 'package:dilithium_crypto/dilithium_crypto.dart';

                            Uint8List randomSeed() {
                            final random = Random.secure();
                            return Uint8List.fromList(
                                List<int>.generate(Dilithium.SEEDBYTES, (_) => random.nextInt(256)));
                            }

                            void main() {
                            // generate key pair
                            final DilithiumKeyPair keyPair = Dilithium.generateKeyPair(
                                DilithiumParameterSpec.LEVEL3,
                                randomSeed()); // Level2 or Level5 can be used as well

                            // create signature
                            final Uint8List validMsg = utf8.encode("Valid Message");
                            final Uint8List signature = Dilithium.sign(keyPair.privateKey, validMsg);

                            // verify signature with the public key and the message
                            bool isValid = Dilithium.verify(keyPair.publicKey, signature, validMsg);
                            assert(isValid);

                            // verify signature with a modified message --> should be marked as invalid
                            final modifiedMsg = utf8.encode("Modified Message");
                            isValid = Dilithium.verify(keyPair.publicKey, signature, modifiedMsg);
                            assert(!isValid);

                            // obtain byte representation of the keys
                            Uint8List publicKeyBytes = keyPair.publicKey.serialize();
                            Uint8List privateKeyBytes = keyPair.privateKey.serialize();

                            print("Private Key:");
                            print(privateKeyBytes);
                            print("Public Key:");
                            print(publicKeyBytes);

                            // recreate keys from byte representation
                            DilithiumPublicKey recreatedPublicKey = DilithiumPublicKey.deserialize(
                                DilithiumParameterSpec.LEVEL3, publicKeyBytes);
                            DilithiumPrivateKey recreatedPrivateKey = DilithiumPrivateKey.deserialize(
                                DilithiumParameterSpec.LEVEL3, privateKeyBytes);

                            // prove that the recreated keys are working
                            final newMsg = utf8.encode("New Message");
                            final Uint8List newSignature = Dilithium.sign(recreatedPrivateKey, newMsg);
                            isValid = Dilithium.verify(recreatedPublicKey, newSignature, newMsg);
                            assert(isValid);
                            }
                            `}
                            <Box>
                            Quelle: <Link href="https://pub.dev/packages/dilithium_crypto" target="_blank" rel="noopener">Dart integration</Link>
                        </Box>
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanelDilithium>
          {/* TabPanel for Rust */}
          <TabPanelDilithium value={dilithiumTabIndex} index={1}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                  <Typography variant="h5">Rust Code Example</Typography>
                      
                      <Typography variant="body1" component="pre">
                          {`Installation

                          cargo add pqc_dilithium
                          
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Usage

                          use pqc_dilithium::*;
                          
                          `}
                      </Typography>
                      
                      <Typography variant="body1" component="pre">
                          {`Key Encapsulation

                            let keys = Keypair::generate();
                            assert!(keys.public.len() == PUBLICKEYBYTES);
                            assert!(keys.expose_secret().len() == SECRETKEYBYTES);
                          
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Signing
                          
                            let msg = "Hello".as_bytes();
                            let sig = keys.sign(&msg);
                            assert!(sig.len() == SIGNBYTES);
                          
                          `}
                          </Typography>
                          <Typography variant="body1" component="pre">
                          {`Verification
                          
                            let sig_verify = verify(&sig, &msg, &keys.public);
                            assert!(sig_verify.is_ok());
                          
                          `}
                        <Box>
                            Quelle: <Link href="https://github.com/Argyle-Software/dilithium" target="_blank" rel="noopener">GitHub Rust integration</Link>
                        </Box>
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanelDilithium>{/* TabPanel for Java */}
          <TabPanelDilithium value={dilithiumTabIndex} index={2}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Java Code Example</Typography>
                      <Typography variant="body1" component="pre">
                          {`Loading the security provider
                            DilithiumProvider provider = new DilithiumProvider();
                            Security.addProvider(provider);
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Key pair generation
                            SecureRandom sr = new SecureRandom();
                            KeyPairGenerator kpg = KeyPairGenerator.getInstance("Dilithium");
                            kpg.initialize(DilithiumParameterSpec.LEVEL2, sr);			
                            KeyPair kp = kpg.generateKeyPair();
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Signing
                            Signature sig = Signature.getInstance("Dilithium");
                            sig.initSign(kp.getPrivate());
                            sig.update("Joy!".getBytes());
                            byte[] signature = sig.sign();
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Signature verification
                            Signature sig = Signature.getInstance("Dilithium");
                            sig.initVerify(kp.getPublic());
                            sig.update("Joy!".getBytes());
                            boolean b = sig.verify(signature);
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Key serialization/deserialization
                            byte[] pubkeyBytes = kp.getPublic().getEncoded(); // This is our bytes to be instantiated
                            KeyFactory kf = KeyFactory.getInstance("Dilithium");
                            PublicKey reconstructedPublicKey = kf.generatePublic(new DilithiumPublicKeySpec(spec, pubkeyBytes));
                          `}
                      </Typography>
                      <Typography variant="body1" component="pre">
                          {`Running the known-answer tests
                             <input-request-file> <output-response-file> <level>
                          `}
                      </Typography>
                      <Box>
                            Quelle: <Link href="https://github.com/mthiim/dilithium-java" target="_blank" rel="noopener">GitHub Java integration</Link>
                        </Box>
                  </CardContent>
              </Card>
          </TabPanelDilithium>
      
          {/* Snack bar for feedback after copying */}
          <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              message={snackbarMessage}
          />

            <Box sx={{ marginBottom: 12 }} />
          

          <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>OpenSSL</Typography>

          <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
              <p>

                OpenSSL, a widely used library for cryptographic applications and protocols like TLS (Transport Layer Security), is one of the most important platforms for implementing such advanced encryption methods. With the integration of post-quantum cryptography into OpenSSL, it can be ensured that future communication channels are protected from the threats posed by quantum computers.
                A promising cryptographic scheme in the field of post-quantum cryptography is Kyber, which is based on the hardness of the module lattice problem. Kyber, a finalist in the NIST competition for the standardization of post-quantum cryptography, offers both high security and efficiency and is recommended for use in future secure communication systems.
                This paper discusses the use of Kyber in conjunction with OpenSSL. It demonstrates how this technology can be implemented to withstand quantum attacks and outlines the steps necessary to enable Kyber-based key exchanges. The adaptation and use of OpenSSL with Kyber provides a practical approach to integrating future-proof encryption methods into existing IT infrastructures.
                The following sections explain the technical details of integrating Kyber into OpenSSL and demonstrate how such a solution can be used in common application scenarios.
                This version is grammatically correct and sounds natural for a native English speaker. Let me know if you need any further adjustments!

              </p>
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Installation</Typography>
        
            {renderCommandFields(sectionCommands.openssl1)}
            <Box sx={{ marginBottom: 8 }} />
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Shared libraries</Typography>
            {renderCommandFields(sectionCommands.openssl2)}
            <Box marginTop={3}>
                Quelle: <Link href="https://github.com/pq-crystals/kyber" target="_blank" rel="noopener">GitHub Openssl</Link>
            </Box>

          
            <Box sx={{ marginBottom: 8 }} />

          
            <Typography variant="body1" gutterBottom>
            In conclusion, we have now reached the end of this brief introduction and journey into the fascinating world of Post-Quantum Cryptography (PQC). The urgency to develop secure encryption methods for the future is more relevant today than ever, especially with the emergence of quantum computers. While these promise immense advances in computational power, they also pose a serious threat to the classical cryptographic methods we currently rely on.
            </Typography>
            <Box sx={{ marginBottom: 3 }} />
            <Typography variant="body1" gutterBottom>
            The standardization and integration of PQC algorithms into existing systems will be a crucial step in ensuring information security in the quantum era. These new cryptographic methods are essential for securing data, especially in areas such as online banking, e-commerce, and communication technologies. Companies and developers should already begin implementing these technologies to be prepared for future threats.
            </Typography>
            <Box sx={{ marginBottom: 3 }} />
            <Typography variant="body1" gutterBottom>
            It will be exciting to see which algorithms will ultimately define the security standards of the future. I hope I have succeeded in giving you an initial insight into this topic and sparking your interest. Engaging with Post-Quantum Cryptography is not only important for experts but affects all of us. The security of our digital world largely depends on how well we prepare for the challenges of the quantum revolution.
            </Typography>

            <Box sx={{ marginBottom: 12 }} />
          
      </Box>
      


  );
}

export default IndexPage;
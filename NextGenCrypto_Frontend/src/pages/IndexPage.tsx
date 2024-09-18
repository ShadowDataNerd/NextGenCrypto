import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography, Snackbar, TextField, ListItem, List, ListItemText, Link } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    



    const navigate = useNavigate();
    const handleOnClick = () =>{
      navigate("/about");

    }

    const [kyberTabIndex, setKyberTabIndex] = useState(0); // Kyber tab state
    const [dilithiumTabIndex, setDilithiumTabIndex] = useState(0); // Dilithium tab state
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false); // Snackbar State
    const [snackbarMessage, setSnackbarMessage] = useState<string>(''); // Snackbar-Nachricht


    // Installation-Befehle für verschiedene Abschnitte
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

    // Funktion, um den Befehl in die Zwischenablage zu kopieren
    const handleCopyToClipboard = (command: string) => {
        navigator.clipboard.writeText(command)
            .then(() => {
                setSnackbarMessage(`Befehl "${command}" wurde in die Zwischenablage kopiert!`);
                setSnackbarOpen(true); // Zeigt Snackbar an, wenn der Befehl kopiert wurde
            })
            .catch(err => {
                console.error('Fehler beim Kopieren: ', err);
            });
    };
    
    
    // Hilfsfunktion, um die Felder unter den Abschnitten zu generieren
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
                        readOnly: true, // Setzt das Textfeld auf nur lesbar
                      }}
                      variant="outlined"
                      sx={{ marginRight: 2 }}
                    />
                    <Button
                      variant="outlined" // Rahmen um den Button
                      color="primary"
                      onClick={() => handleCopyToClipboard(cmd.command)}
                      sx={{
                        height: '100%', // Gleiche Höhe wie das Textfeld
                        color: 'white',
                        borderColor: 'white', // Transparenter Rahmen
                        backgroundColor: 'transparent', // Transparenter Hintergrund
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Leichtes Hover-Effekt
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
            <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Willkommen in der Welt der PQC</Typography>
            <Box sx={{ padding: 5 }}></Box>
            <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Bist du den schon bereit für PQC?</Typography>
            

            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
               
                Stellen Sie sich eine Welt vor, in der die Kryptographie, die wir heute kennen und der wir vertrauen, 
                von einer neuen Technologie vollständig durchbrochen werden könnte. Diese Welt könnte näher sein, als wir denken. 
                Die Quantencomputer, die sich rapide weiterentwickeln, versprechen enorme Fortschritte in Wissenschaft und Technologie, 
                stellen jedoch eine ernsthafte Bedrohung für die klassische Kryptographie dar. Um dieser Bedrohung zu begegnen, 
                entwickelt die Forschung ein neues Feld: die Post-Quantum Kryptographie (PQC). Aber was genau ist PQC, und warum ist sie so wichtig? 
                In diesem Artikel tauchen wir tief in die Welt der Post-Quantum Kryptographie ein und erklären, 
                warum sie in einer zunehmend digitalisierten Gesellschaft unerlässlich ist.
                </p>
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Aber was hilft?</Typography>
               
                Die Frage nach der Sicherheit kryptographischer Algorithmen in einer Welt mit Quantencomputern ist von entscheidender Bedeutung. 
                Um diese Frage zu beantworten, hat das NIST den Post-Quantum-Kryptographie-Wettbewerb ins Leben gerufen. Ziel ist es, 
                Algorithmen zu identifizieren, die gegen Angriffe von Quantencomputern sicher sind. Der Wettbewerb begann 2016 und durchlief mehrere Runden, 
                in denen die eingereichten Algorithmen hinsichtlich Sicherheit und Effizienz bewertet wurden. Im Juli 2022 wurden die ersten quantensicheren Algorithmen ausgewählt, 
                darunter Kyber für die Verschlüsselung und Dilithium für digitale Signaturen. Diese Algorithmen sollen zukünftige Standards in der IT-Sicherheit bilden.
                
                
                Zusätzlich gibt das Bundesamt für Sicherheit in der Informationstechnik (BSI) ebenfalls Empfehlungen zu Post-Quantum-Algorithmen. 
                Besonders hervorgehoben werden gitterbasierte, code-basierte und hashbasierte Verfahren, die als widerstandsfähig gegenüber Quantenangriffen gelten. 
                Ein Beispiel hierfür ist der code-basierte Algorithmus Classic McEliece, der aufgrund seiner hohen Sicherheit, trotz großer Schlüssellängen, 
                vom BSI empfohlen wird. Auch hashbasierte Signaturverfahren wie SPHINCS+ werden vom BSI anerkannt, da sie besonders starke Sicherheitsgarantien bieten.  
                </p>
                
            </Typography>
            <Box>
                Quelle: <Link href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener">NIST.gov PQC Wetbewerb </Link>
            </Box>
            <Box sx={{ marginBottom: 8 }} />
          
            <Box sx={{ padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Post-Quantum Kryptographie Algorithmen
                </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText
                            primary={
                            <>
                            <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Kyber
                            </Typography>
                                : Ein gitterbasierter Algorithmus für die Verschlüsselung und Schlüsselvereinbarung. Er bietet hohe Sicherheit und Effizienz und wurde als primärer Standard für Schlüsselvereinbarungsmechanismen im NIST-Standardisierungsprozess ausgewählt. Kyber nutzt die Schwierigkeit von Modul-Gitterproblemen, um sichere Kommunikation zu ermöglichen.
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
                                : Ein Algorithmus für digitale Signaturen, der ebenfalls auf der Gitter-basierten Kryptographie beruht und hohe Leistung und Sicherheit bietet. Dilithium zeichnet sich durch schnelle Signaturerstellung und -verifikation sowie moderate Schlüssel- und Signaturgrößen aus. Es ist einer der Hauptkandidaten für die Standardisierung durch das NIST.
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
                                : Ein gitterbasierter Signaturalgorithmus, der für Anwendungen geeignet ist, die kompakte und effiziente Signaturen benötigen. Falcon bietet kleinere Signatur- und Schlüsselgrößen im Vergleich zu anderen gitterbasierten Algorithmen und ist somit ideal für ressourcenbeschränkte Umgebungen.
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
                                : Ein hash-basierter Algorithmus für digitale Signaturen, der zwar weniger effizient ist, aber extrem starke Sicherheitsgarantien bietet. SPHINCS+ ist unabhängig von Annahmen über die Schwierigkeit bestimmter mathematischer Probleme und bietet dadurch langfristige Sicherheit gegen Quantenangriffe.
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
                                : Ein code-basierter Verschlüsselungsalgorithmus, der als äußerst robust gegen Quantenangriffe gilt, jedoch sehr große Schlüssellängen erfordert. Classic McEliece basiert auf der Schwierigkeit des Decodierens zufälliger linearer Codes und hat eine über 40-jährige Geschichte ohne bekannte erfolgreiche Angriffe.
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
                                : Ein code-basierter Schlüsselvereinbarungsmechanismus, der auf zyklischen Codes basiert. BIKE bietet hohe Sicherheit und Effizienz und ist ein Kandidat im NIST-Standardisierungsprozess für Post-Quantum-Kryptographie.
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
                                : Ein code-basierter Verschlüsselungsalgorithmus, der die Schwierigkeit des Decodierens von Quasi-zyklischen Codes nutzt. HQC bietet einen guten Kompromiss zwischen Sicherheit und Leistung und ist ebenfalls Teil des NIST-Standardisierungsprozesses.
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
                                : Ein multivariater Signaturalgorithmus, der auf der Schwierigkeit basiert, Systeme nichtlinearer Gleichungen zu lösen. Rainbow bietet schnelle Signaturerstellung und -verifikation, wurde jedoch im NIST-Prozess aufgrund von Sicherheitsbedenken nicht weiterverfolgt.
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
                                : Ein gitterbasierter Schlüsselvereinbarungsmechanismus, der auf dem Learning with Errors (LWE)-Problem basiert. FrodoKEM bietet hohe Sicherheit ohne die Verwendung von strukturierter Gitterarithmetik, was es widerstandsfähiger gegen bestimmte Angriffe macht.
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
                                : Ein weiterer gitterbasierter Verschlüsselungsalgorithmus, der seit den 1990er Jahren bekannt ist. NTRU bietet schnelle Verschlüsselungs- und Entschlüsselungszeiten sowie moderate Schlüsselgrößen und wurde im NIST-Prozess als alternativer Kandidat betrachtet.
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
              Um euch das besser zu veranschaulichen, habe ich die Algorithmen Kyber und Dilithium recherchiert und stelle sie euch hier vor. 
              Weitere Algorithmen könnt ihr in der Liste des NIST-Wettbewerbs finden.
              </p>
              
            </Typography>
            <Box sx={{ marginBottom: 8 }} />



            <Typography variant="h3" gutterBottom>
                Kyber
            </Typography>

            


            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 0 }}>
              <p>
              Kyber ist ein kryptografisches Verfahren, das als Teil der "Post-Quantum-Kryptographie" entwickelt wurde, um gegen Angriffe resistent zu sein, 
              die mit zukünftigen Quantencomputern möglich wären. Es wurde im Rahmen des von NIST (National Institute of Standards and Technology) 
              gestarteten Wettbewerbs zur Standardisierung von Post-Quantum-Kryptographie entworfen und gilt als einer der vielversprechendsten Kandidaten. 
              Kyber basiert auf der Schwierigkeit des "Module Learning with Errors"-Problems (MLWE), 
              das auf Gitterstrukturen angewendet wird und als schwer zu lösen gilt, selbst für Quantencomputer.
              </p>
              
            </Typography>
            <Typography variant="h6" gutterBottom>
            Funktionsweise von Kyber
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Kyber basiert auf einem speziellen mathematischen Problem, das als "Learning With Errors" (LWE) bekannt ist und in der verschärften 
                Form der Modul-Gitter-Anwendung verwendet wird. Das Grundprinzip von LWE besteht darin, dass es extrem schwierig ist, ein geheimes Signal 
                (wie z.B. einen Schlüssel) zu entschlüsseln, wenn es durch zufälliges "Rauschen" verfälscht wurde.
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Schlüsselerzeugung
                                </Typography>
                                : Der Absender und Empfänger erzeugen gemeinsam ein Schlüsselpaar bestehend aus einem öffentlichen und einem privaten Schlüssel. 
                                Dies geschieht durch die Verwendung von Modul-Gittern. Der öffentliche Schlüssel ( pk = (A, t) ) besteht aus einer zufällig 
                                generierten Matrix ( A ) und einem Vektor ( t = A * s + e ), wobei ( s ) der geheime Schlüssel und ( e ) ein kleiner 
                                Fehlervektor ist.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Verschlüsselung
                                </Typography>
                                : Der Absender verwendet den öffentlichen Schlüssel ( pk ), um eine Nachricht zu verschlüsseln. 
                                Die Verschlüsselung erfolgt durch Berechnung des Chiffretexts ( c = (u, v) ), wobei ( u = A^T * r + e_1 ) 
                                und ( v = t^T * r + e_2 + m ) sind. Hierbei sind ( r ) und ( e_1, e_2 ) Zufallswerte, die die Sicherheit erhöhen 
                                und ( m ) ist die zu übertragende Nachricht.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Entschlüsselung
                                </Typography>
                                : Der Empfänger verwendet den geheimen Schlüssel ( s ), um den Chiffretext zu entschlüsseln. 
                                Dies geschieht durch Berechnung der Nachricht ( m ) als ( m = v - u^T * s ).
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                </p>
              
            </Typography>

            <Typography variant="h6" gutterBottom>
            Einsatzgebiete von Kyber
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Kyber wird in erster Linie für asymmetrische Verschlüsselung verwendet, d.h. für den sicheren Austausch von Schlüsseln über unsichere 
                Kommunikationskanäle. Dies ist in einer Vielzahl von Anwendungen von zentraler Bedeutung, darunter:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Sichere Kommunikation im Internet
                                </Typography>
                                : Heutige Webbrowser verwenden asymmetrische Kryptographie, um eine sichere Verbindung zu Websites herzustellen (z.B. über TLS/SSL). 
                                Mit der wachsenden Bedrohung durch Quantencomputer, die traditionelle Verfahren wie RSA oder ECC brechen könnten, wird Kyber als zukünftiger 
                                Standard angesehen, um diese Kommunikation zu schützen.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Eingebettete Systeme und IoT-Geräte
                                </Typography>
                                : Aufgrund seiner Effizienz und geringen Ressourcenanforderungen eignet sich Kyber für den Einsatz in Geräten mit begrenzter 
                                Rechenleistung und Speicher, die dennoch sichere Kommunikation benötigen.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Virtuelle Private Netzwerke (VPN)
                                </Typography>
                                :  VPNs verwenden asymmetrische Kryptographie, um Schlüssel für die verschlüsselte Kommunikation zwischen dem Benutzer 
                                und dem VPN-Server auszutauschen. Auch hier bietet Kyber eine zukunftssichere Lösung.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                Insgesamt bietet Kyber eine robuste und effiziente Lösung für das Schlüsselaustauschproblem in einer Welt, 
                in der Quantencomputer eine reale Bedrohung für die heutige Kryptographie darstellen könnten. Seine mathematischen Grundlagen und 
                die Effizienz der Implementierung machen es zu einem vielversprechenden Kandidaten für eine Vielzahl von Anwendungen, die langfristige 
                Sicherheit erfordern.
                </p>
              
            </Typography>
            

            {/* Installations-Befehle für Einleitung */}
            {renderCommandFields(sectionCommands.kyber)}
            <Box sx={{ marginBottom: 8 }} />

            <Typography sx={{ display: 'flex', marginBottom: 0, padding: 0 }}>
              <p>
              Hier findest du einige Beispielanwendungen in den Programmiersprachen Rust, Python und C++. 
              Diese Beispiele sollen dir helfen, die Implementierung und Nutzung der vorgestellten Algorithmen besser zu verstehen und in deinen eigenen 
              Projekten anzuwenden.
              </p>
              
            </Typography>

          {/* Tab-Komponente für die Auswahl von Go, Rust und Python */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={kyberTabIndex} onChange={handleKyberTabChange} centered>
                  <Tab label="C++" />
                  <Tab label="Rust" />
                  <Tab label="Python" />
              </Tabs>
          </Box>

          {/* TabPanel für Go */}
          <TabPanel value={kyberTabIndex} index={0}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Go Code Beispiel</Typography>
                      <Typography variant="body1" component="pre">
                          {`package main

                            import "fmt"

                            func main() {
                            fmt.Println("Hello, Go!")
                            }`}
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanel>
          {/* TabPanel für Rust */}
          <TabPanel value={kyberTabIndex} index={1}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                  <Typography variant="h5">Rust Code Beispiel</Typography>
                      
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
                      <Typography variant="h5">Python Code Beispiel</Typography>
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
               
                Der CRYSTALS-Dilithium-Algorithmus ist ein digitaler Signaturalgorithmus, der entwickelt wurde, um besonders sichere Signaturen zu erzeugen, die auch gegen Angriffe durch Quantencomputer resistent sind. Die Sicherheit des Algorithmus basiert auf der Schwierigkeit, kurze Vektoren in Gittern zu finden, einer gut erforschten und als sicher geltenden mathematischen Problemstellung.
                Dilithium wurde mit dem Ziel entworfen, einfach und sicher implementierbar zu sein. Dabei wurden bekannte Risiken durch Angriffe auf die Erzeugung zufälliger Geheimwerte minimiert, indem der Algorithmus auf die Erzeugung von Zufallswerten aus der Gaußschen Verteilung verzichtet. Stattdessen verwendet Dilithium ausschließlich gleichverteilte Zufallswerte, was die Implementierung erheblich vereinfacht und sicherer gegen Seitenkanalangriffe macht.
                Ein weiteres wichtiges Designziel war die Kompaktheit der öffentlichen Schlüssel und Signaturen. In vielen Anwendungen, etwa bei Zertifikatsketten, müssen sowohl der öffentliche Schlüssel als auch die Signatur übertragen werden. Dilithium minimiert die Summe dieser beiden Parameter, ohne die Sicherheit zu gefährden. Auf diese Weise ist der Algorithmus besonders für ressourcenbeschränkte Umgebungen geeignet, in denen Speicherplatz und Bandbreite begrenzt sind.
                Das Signaturverfahren basiert auf einem sogenannten Fiat-Shamir-Ansatz mit Unterbrechungen, das bereits seit vielen Jahren in der Kryptographie verwendet wird. Es nutzt eine Kombination aus gitterbasierten Algorithmen, um sichere Signaturen zu erstellen und zu verifizieren .
                </p>
            </Typography>
            <Typography variant="h6" gutterBottom>
            Funktionsweise von Dilithium
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Dilithium basiert auf dem mathematischen Konzept des „Fiat-Shamir mit Abbrüchen“-Ansatzes und nutzt das 
                Modul-Learning-with-Errors-Problem (Module-LWE), ein schwer zu lösendes Gitterproblem. Der Signaturalgorithmus arbeitet in drei Schritten:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Schlüsselerzeugung
                                </Typography>
                                : Zuerst wird eine Gitterstruktur in Form einer Matrix A erzeugt. 
                                Dann werden die geheimen Schlüssel s_1 und s_2 zufällig generiert, während der öffentliche Schlüssel durch t = A * s_1 + s_2 
                                bestimmt wird. Der öffentliche Schlüssel besteht aus der Matrix A und einem Teil von t, während die geheimen Schlüssel s_1 und s_2 
                                geheim gehalten werden.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Signaturerzeugung
                                </Typography>
                                : Um eine Nachricht M zu signieren, generiert der Absender eine Zufallsmaske y und berechnet w = A * y. 
                                Die Signatur z wird als z = y + c * s_1 erzeugt, wobei c eine Hash-Wert-Herausforderung ist, die auf der Nachricht M und 
                                einem Teil von w basiert.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Verifikation
                                </Typography>
                                : Der Verifizierer überprüft die Signatur, indem er überprüft, ob die hohen Bits des berechneten Wertes A * z - c * t 
                                übereinstimmen und ob die Hash-Herausforderung korrekt rekonstruiert werden kann. Dies gewährleistet, dass die Signatur 
                                authentisch und gültig ist.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                </p>
              
            </Typography>

            <Typography variant="h6" gutterBottom>
            Einsatzgebiete von Dilithium
            </Typography>
            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
                <p>
                Dilithium ist für digitale Signaturen optimiert und findet in vielen sicherheitskritischen Anwendungen Einsatz:
                
                <List>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                1. Software-Updates und Code-Signaturen
                                </Typography>
                                : Digitale Signaturen, wie die von Dilithium erzeugten, werden verwendet, um die Integrität und Authentizität von Software-Updates sicherzustellen. 
                                Dies ist von entscheidender Bedeutung, um sicherzustellen, dass Software nicht von einem Angreifer manipuliert wurde.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                2. Authentifizierungsprotokolle
                                </Typography>
                                : Dilithium wird in Authentifizierungsprotokollen eingesetzt, bei denen es wichtig ist, die Identität eines 
                                Benutzers oder eines Geräts zu überprüfen, z. B. in IoT-Geräten oder in sicheren Kommunikationssystemen.
                            </>
                            }
                            
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                            <>
                                <Typography component="span" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                3. Langzeit-Sicherheit
                                </Typography>
                                :  Da Quantencomputer in der Zukunft bestehende kryptografische Verfahren wie RSA und ECC brechen könnten, 
                                bietet Dilithium eine Lösung für Anwendungen, die langfristige Sicherheit erfordern, wie z. B. in staatlichen oder 
                                militärischen Systemen.
                            </>
                            }
                            
                        />
                    </ListItem>
                </List>
                Dilithium bietet eine effiziente und zukunftssichere Lösung für digitale Signaturen in einer Zeit, in der Quantencomputer 
                eine zunehmende Bedrohung darstellen. Seine mathematischen Grundlagen machen es zu einem der vielversprechendsten Algorithmen 
                für den Einsatz in sicherheitskritischen Bereichen, die sowohl hohe Sicherheit als auch Performance erfordern.
                </p>
              
            </Typography>
          
          
          
          
          
          {/* Tab-Komponente für die Auswahl von Java, Rust und Python */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={dilithiumTabIndex} onChange={handleDilithiumTabChange} centered>
                  <Tab label="Go" />
                  <Tab label="Rust" />
                  <Tab label="Java" />
              </Tabs>
          </Box>

          {/* TabPanel für Go */}
          <TabPanelDilithium value={dilithiumTabIndex} index={0}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Go Code Beispiel</Typography>
                      <Typography variant="body1" component="pre">
                          {`package main BIANANSNASNC

                            import "fmt"

                            func main() {
                            fmt.Println("Hello, Go!")
                            }`}
                      </Typography>
                  </CardContent>
              </Card>
          </TabPanelDilithium>
          {/* TabPanel für Rust */}
          <TabPanelDilithium value={dilithiumTabIndex} index={1}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                  <Typography variant="h5">Rust Code Beispiel</Typography>
                      
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
          </TabPanelDilithium>{/* TabPanel für Java */}
          <TabPanelDilithium value={dilithiumTabIndex} index={2}>
              <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                      <Typography variant="h5">Java Code Beispiel</Typography>
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
      
          {/* Snackbar für Rückmeldung nach dem Kopieren */}
          <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              message={snackbarMessage}
          />

            <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
              <p>
              <h3>######</h3>

              Post-Quantum Kryptographie (PQC) bezieht sich auf kryptographische Algorithmen, 
              die resistent gegen die Angriffe von Quantencomputern sind. Während klassische Kryptosysteme wie RSA und ECC (Elliptic Curve Cryptography) 
              auf mathematischen Problemen basieren, die für klassische Computer schwierig zu lösen sind, 
              könnten leistungsstarke Quantencomputer diese Probleme in einer für uns alarmierend kurzen Zeit lösen. 
              Die Notwendigkeit für PQC liegt in der Tatsache, dass unsere derzeitigen kryptographischen Systeme verwundbar sind und wir uns darauf vorbereiten müssen, 
              zukünftige Sicherheitsanforderungen zu erfüllen.
              </p>
          </Typography>
          {/* Installations-Befehle für Post-Quantum Kryptographie */}
          {renderCommandFields(sectionCommands.dilithium)}
          <Box sx={{ marginBottom: 8 }} />

          <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>OpenSSL</Typography>

          <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
              <p>

                OpenSSL, eine weit verbreitete Bibliothek für kryptographische Anwendungen und Protokolle wie TLS (Transport Layer Security), ist eine der wichtigsten Plattformen für die Implementierung solcher fortschrittlicher Verschlüsselungsmethoden. Mit der Integration von Post-Quantum-Kryptographie in OpenSSL kann sichergestellt werden, dass zukünftige Kommunikationskanäle auch vor den Bedrohungen, die durch Quantencomputer entstehen, geschützt sind.
                Ein vielversprechendes kryptographisches Verfahren im Bereich der Post-Quantum-Kryptographie ist Kyber, welches auf der Schwierigkeit des Modulo-Gitter-Problems basiert. Kyber, ein Finalist im NIST-Wettbewerb zur Standardisierung von Post-Quantum-Kryptographie, bietet neben hoher Sicherheit auch Effizienz und wird für den Einsatz in zukünftigen sicheren Kommunikationssystemen empfohlen.
                Diese Arbeit behandelt die Nutzung von Kyber in Verbindung mit OpenSSL. Dabei wird gezeigt, wie diese Technologie implementiert werden kann, um Quantenangriffen zu widerstehen, und welche Schritte notwendig sind, um Kyber-basierte Schlüsselvereinbarungen zu ermöglichen. Die Anpassung und Nutzung von OpenSSL mit Kyber bietet einen praxisnahen Ansatz, um zukunftssichere Verschlüsselungsmethoden in bestehende IT-Infrastrukturen zu integrieren.
                Die folgenden Abschnitte erläutern die technischen Details zur Integration von Kyber in OpenSSL und demonstrieren, wie eine solche Lösung in gängigen Anwendungsszenarien genutzt werden kann.

              </p>
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Installation</Typography>
        
            {renderCommandFields(sectionCommands.openssl1)}
            <Box sx={{ marginBottom: 8 }} />
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Shared libraries</Typography>
            {renderCommandFields(sectionCommands.openssl2)}
            <Box marginTop={3}>
                Quelle: <Link href="https://github.com/pq-crystals/kyber" target="_blank" rel="noopener">GitHub </Link>
            </Box>

          


          <Typography sx={{ display: 'flex', marginBottom: 3, padding: 2 }}>
              <p>
              <h3>Die wichtigsten Ansätze in der Post-Quantum Kryptographie</h3>

              
              </p>
          </Typography>

            <Typography variant="body1" gutterBottom>
            Einsatzgebiete von Kyber Die Entwicklung von Quantencomputern schreitet schneller voran, als viele erwartet haben. Mit der Aussicht, 
              dass ein Quantencomputer in naher Zukunft die RSA-Verschlüsselung brechen könnte – eine Technologie, 
              die weit verbreitet für sichere Kommunikation verwendet wird – ist die Zeit für die Einführung von PQC jetzt. 
              Unternehmen und Regierungen weltweit beginnen bereits, sich auf diese neue Herausforderung vorzubereiten. 
              Die Einführung von PQC ist nicht nur eine Frage der technischen Anpassung, sondern auch eine strategische Entscheidung, 
              die weitreichende Auswirkungen auf die nationale Sicherheit, den Datenschutz und die globale digitale Infrastruktur hat.
            </Typography>


          <Button onClick={handleOnClick} variant='contained' color='secondary' sx={{ marginTop: 3 }}>Weiter zur About-Seite</Button>
      </Box>
      


  );
}

export default IndexPage;
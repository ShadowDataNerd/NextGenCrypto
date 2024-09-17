import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Paper, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



const PQCPage = () =>{
    


    

    return <Box>
        <Box sx={{ marginBottom: 10 }} />
        <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>FAQ</Typography>
        <Box sx={{ padding: 1 }}></Box>
        <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>Häufig gestellte Fragen zur Post-Quantum-Kryptographie</Typography>
        

        
        
    <Box>
      <Typography sx={{marginTop: 2, marginBottom: 2}}>
          Die Entwicklung der Quantencomputer-Technologie schreitet schnell voran und stellt eine wachsende Bedrohung für herkömmliche kryptografische Verfahren dar. 
          Post-Quantum-Kryptographie (PQC) bietet einen Ausweg: Sie zielt darauf ab, Verschlüsselungsmethoden zu entwickeln, die auch den Angriffen zukünftiger Quantencomputer standhalten können. 
          Diese FAQ-Seite soll grundlegende Fragen zur Post-Quantum-Kryptographie beantworten, insbesondere für Unternehmen, CTOs und Sicherheitsbeauftragte, die sich auf diese kommende Herausforderung vorbereiten möchten.

          Disclaimer:
          Die Informationen auf dieser Seite basieren auf den aktuellen Empfehlungen und Veröffentlichungen des Bundesamts für Sicherheit in der Informationstechnik (BSI) und des National Institute of Standards and Technology (NIST). 
          Es ist jedoch zu beachten, dass das Thema Post-Quantum-Kryptographie ein hochdynamisches und sich schnell veränderndes Feld ist. Neue Erkenntnisse und Entwicklungen können diese Informationen schnell veralten lassen. 
          Wir empfehlen daher, regelmäßig aktuelle Berichte von offiziellen Stellen wie BSI und NIST zu konsultieren.

      </Typography>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', marginBottom: 1, marginTop: 2, padding: 0 }}>Disclaimer:</Typography>
      <Typography sx={{marginTop: 1, marginBottom: 2}}>
        
          
          Die Informationen auf dieser Seite basieren auf den aktuellen Empfehlungen und Veröffentlichungen des Bundesamts für Sicherheit in der Informationstechnik (BSI) und des National Institute of Standards and Technology (NIST). 
          Es ist jedoch zu beachten, dass das Thema Post-Quantum-Kryptographie ein hochdynamisches und sich schnell veränderndes Feld ist. Neue Erkenntnisse und Entwicklungen können diese Informationen schnell veralten lassen. 
          Wir empfehlen daher, regelmäßig aktuelle Berichte von offiziellen Stellen wie BSI und NIST zu konsultieren.

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
          1. Was ist Post-Quantum-Kryptographie?
        </AccordionSummary>
        <AccordionDetails>
          
          Post-Quantum-Kryptographie (PQC) bezeichnet eine Reihe von kryptografischen Algorithmen, 
          die gegen die Angriffe von Quantencomputern resistent sind. Diese Algorithmen basieren auf mathematischen Problemen, 
          die auch mit der enormen Rechenleistung von Quantencomputern nicht effizient gelöst werden können. Ziel ist es, 
          die Datenintegrität und Vertraulichkeit auch in einer Welt sicherzustellen, in der leistungsfähige Quantencomputer existieren.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          2. Warum sind herkömmliche kryptografische Verfahren durch Quantencomputer bedroht?
        </AccordionSummary>
        <AccordionDetails>
        Herkömmliche kryptografische Algorithmen wie RSA und elliptische Kurven-Kryptographie (ECC) basieren auf der Schwierigkeit, 
        bestimmte mathematische Probleme zu lösen (z. B. Faktorisierung großer Zahlen). Quantencomputer, insbesondere durch den Shor-Algorithmus, 
        könnten diese Probleme effizient lösen und damit die Sicherheit dieser Algorithmen gefährden. Dies bedeutet, 
        dass ein ausreichend leistungsstarker Quantencomputer in der Lage wäre, diese Verschlüsselungen zu brechen.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          3. Wie funktionieren Quantencomputer und warum stellen sie eine Bedrohung dar?
        </AccordionSummary>
        <AccordionDetails>
        Quantencomputer nutzen die Prinzipien der Quantenmechanik, wie Superposition und Verschränkung, um Berechnungen durchzuführen. 
        Während klassische Computer Informationen in Bits speichern (0 oder 1), nutzen Quantencomputer sogenannte Qubits, 
        die gleichzeitig in mehreren Zuständen existieren können. Diese Eigenschaft ermöglicht es Quantencomputern, bestimmte Berechnungen, 
        wie die Faktorisierung großer Zahlen, exponentiell schneller durchzuführen als klassische Computer.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          4. Welche Algorithmen gelten als quantensicher?
        </AccordionSummary>
        <AccordionDetails>
        Es gibt mehrere vielversprechende quantensichere Algorithmen, die derzeit im Rahmen des NIST-Standardisierungsprozesses evaluiert werden. 
        Dazu gehören Algorithmen, die auf gitterbasierten, codebasierten und multivariaten Systemen basieren. 
        Beispiele sind CRYSTALS-Kyber und CRYSTALS-Dilithium für Schlüsselaustausch und digitale Signaturen.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          5. Wie lange wird es noch dauern, bis Quantencomputer herkömmliche Kryptografie brechen können?
        </AccordionSummary>
        <AccordionDetails>
        Schätzungen gehen davon aus, dass es noch etwa 10 bis 15 Jahre dauern könnte, bis ein voll funktionsfähiger Quantencomputer entwickelt wird, 
        der in der Lage ist, die gängigen Kryptosysteme zu brechen. Die Forschung und Entwicklung auf diesem Gebiet ist jedoch schnelllebig, weshalb es schwierig ist, 
        genaue Prognosen zu treffen.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          6. Wie unterscheidet sich Post-Quantum-Kryptographie von klassischer Kryptographie?
        </AccordionSummary>
        <AccordionDetails>
        Der Hauptunterschied liegt in den mathematischen Problemen, auf denen die Sicherheit der Algorithmen basiert. 
        Klassische Kryptosysteme basieren oft auf Problemen wie der Faktorisierung großer Zahlen oder dem diskreten Logarithmus, 
        während PQC auf schwierigeren Problemen wie der Lösung von Gitterproblemen, isogeniebasierten Ansätzen oder Multivariat-Polynomen basiert. 
        Diese Probleme bleiben auch für Quantencomputer schwierig.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          7. Welche Schritte unternehmen Organisationen wie das BSI und NIST zur Standardisierung von Post-Quantum-Kryptographie?
        </AccordionSummary>
        <AccordionDetails>
        Sowohl das BSI als auch das NIST arbeiten aktiv an der Erforschung und Standardisierung von Post-Quantum-Kryptographie. 
        Das NIST leitet seit 2016 einen Wettbewerb zur Auswahl der robustesten quantensicheren Algorithmen. 
        Das BSI bietet parallel dazu Richtlinien für Unternehmen und Organisationen, wie der Übergang zu quantensicheren Lösungen geplant und umgesetzt werden kann.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          8. Wie können Unternehmen und Regierungen sich auf die Ära der Quantencomputer vorbereiten?
        </AccordionSummary>
        <AccordionDetails>
        Unternehmen und Regierungen sollten sich frühzeitig auf den Übergang zu quantensicheren Algorithmen vorbereiten. 
        Das bedeutet, bestehende kryptografische Infrastrukturen zu überprüfen, 
        hybride Systeme zu implementieren (die sowohl klassische als auch quantensichere Algorithmen nutzen) 
        und einen langfristigen Plan für den Wechsel zu Post-Quantum-Kryptographie zu entwickeln.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          9. Sind die derzeitigen Verschlüsselungen, die wir täglich nutzen, in Gefahr?
        </AccordionSummary>
        <AccordionDetails>
        Ja, aber nicht unmittelbar. Die meisten heutigen Verschlüsselungen sind anfällig für Quantenangriffe, 
        aber solange keine großen Quantencomputer existieren, sind diese Systeme sicher. Es wird jedoch empfohlen, 
        sich schon jetzt auf quantensichere Lösungen vorzubereiten, um langfristige Datensicherheit zu gewährleisten.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          10. Was sollten Entwickler und IT-Sicherheitsfachleute jetzt tun, um sich auf Post-Quantum-Kryptographie vorzubereiten?
        </AccordionSummary>
        <AccordionDetails>
        IT-Sicherheitsfachleute sollten sich mit den Entwicklungen im Bereich der Post-Quantum-Kryptographie vertraut machen und den Übergang zu quantensicheren Algorithmen aktiv planen. 
        Das Implementieren hybrider Systeme, die sowohl klassische als auch PQC-Algorithmen nutzen, ist eine empfohlene Strategie. 
        Zudem sollte die Kryptografie-Infrastruktur regelmäßig überprüft und zukunftssicher gestaltet werden.
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13-content"
          id="panel13-header"
        >
          Noch weite??????????
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>


        
  


    </Box>
};

export default PQCPage
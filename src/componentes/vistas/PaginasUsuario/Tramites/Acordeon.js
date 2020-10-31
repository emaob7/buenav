import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Motociclista</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b> REQUISITOS</b> <br/>
1 - Formulario declaración jurada, estampillas.<br/>
2 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
3 - Presentar comprobante de grupo sanguíneo (original y fotocopia autenticada).<br/>
4 - Examen de vista y oído.<br/>
5 - APROBAR EXAMEN TEÓRICO Y PRÁCTICO .<br/>
6 - Examen Psicotécnico.<br/>
7 - En caso de extranjero deberá presentar pasaporte original vigente y carnet de admisión permanente, extendido por migraciones, copia autenticada.<br/>
8 - Certificado de vida y residencia.<br/>
9 - Haber cumplido 18 años de edad.
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Particular</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <b> REQUISITOS</b> <br/>
1 - Haber cumplido 18 años de edad.<br/>
2 - Formulario declaración jurada, estampillas.<br/>
3 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
4 - Presentar comprobante de grupo sanguíneo (original y fotocopia autenticada).<br/>
5 - Examen de vista y oído.<br/>
6 - Examen Psicotécnico.<br/>
7 - Aprobar examen teórico y práctico.<br/>
8 - Certificado de vida y residencia.<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
           <Typography  variant="h4"  color="textSecondary" >Extranjero</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <b> REQUISITOS</b> <br/>
1 - Formulario declaración jurada, estampillas.<br/>
2 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
3 - Deberá presentar pasaporte original vigente y carnet de admisión permanente, extendido por migraciones, copia autenticada.<br/>
4 - Tipificación sanguínea.<br/>
5 - Examen de vista y oído.<br/>
6 - Examen Psicotécnico.<br/>
7 - Haber cumplido 18 años de edad.<br/>
8 - Certificado de vida y residencia.<p/>
Todos los requisitos exigidos en la Categoría Particular, exceptuando la cédula de identidad. La licencia para extranjero es por un año. Conforme al Decreto NRO. 1216/93.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Profesional “C”</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <b> REQUISITOS</b> <br/>
1 - Haber cumplido 20 años .<br/>
2 - Formulario declaración jurada, estampillas.<br/>
3 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
4 - Presentar comprobante de grupo sanguíneo (original y fotocopia autenticada).<br/>
5 - Examen de vista y oído.<br/>
6 - Examen Psicotécnico.<br/>
7 - Aprobar examen teórico y práctico.<br/>
8 - En caso de extranjero deberá presentar pasaporte original vigente y carnet de admisión permanente, extendido por migraciones, copia autenticada.<br/>
9 - Certificado de vida y residencia.<p/>
Para operar maquinarias pesadas y tractores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Profesional "B"</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b> REQUISITOS</b> <br/>                   
1 - Haber cumplido 20 años .<br/>
2 - Formulario declaración jurada, estampillas.<br/>
3 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
4 - Presentar comprobante de grupo sanguíneo (original y fotocopia autenticada).<br/>
5 - Examen de vista y oído.<br/>
6 - Examen Psicotécnico.<br/>
7 - Aprobar examen teórico y práctico.<br/>
8 - Certificado de vida y residencia.<br/>
9 - En caso de extranjero deberá presentar pasaporte original vigente y carnet de admisión permanente, extendido por migraciones, copia autenticada.<br/>
10 - Certificado de vida y residencia.
 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Profesional "B" Superior</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b> REQUISITOS</b> <br/>                   
1 - Haber cumplido 22 años de edad.<br/>
2 - Formulario declaración jurada, estampillas.<br/>
3 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
4 - Contar con un año de antigüedad como conductor de la Licencia Categoría Profesional “B”, presentar certificado de cancelación de Licencias del Interior expedido por la OPACI.<br/>
5 - Presentar  comprobante de grupo sanguíneo original  (y fotocopia autenticada).<br/>
6 - Examen de vista y de oído.<br/>
7 - Examen Psicotécnico.<br/>
8 - Aprobar examen teórico y práctico.<br/>
9 - Certificado de antecedentes penales.<br/>
10 - En caso de extranjero deberá presentar pasaporte original vigente y carnet de admisión permanente, extendido por migraciones, copia autenticada.<br/>
11 - Certificado de vida y residencia.
 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Profesional "A"</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b> REQUISITOS</b> <br/>                  
1 - Ser poseedor de una antigüedad mínima de dos años de la Licencia de Conducir de la categoría clase “B” Superior y clase “B”.<br/>
2 - Haber cumplido 22 años de edad.<br/>
3 - Formulario declaración jurada, estampillas.<br/>
4 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
5 - Presentar comprobante de grupo sanguíneo original (y fotocopia autenticada).<br/>
6 - Examen de vista y de oído.<br/>
7 - Examen Psicotécnico.<br/>
8 - Aprobar examen teórico y práctico.<br/>
9 - Certificado de antecedentes penales.<br/>
10 - Certificado de vida y residencia.
 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Profesional "A" Superior</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b> REQUISITOS</b> <br/>                 
1 - Ser poseedor con una antigüedad mínima de un año, de la Licencias de Conducir de la Categoría “A”.<br/>
2 - Haber cumplido 25 años de edad.<br/>
3 - Formulario declaración jurada, estampillas.<br/>
4 - Presentar cédula de identidad original y fotocopia autenticada.<br/>
5 - Presentar comprobante de grupo sanguíneo original (y fotocopia autenticada).<br/>
6 - Examen de vista y de oído.<br/>
7 - Examen Psicotécnico.<br/>
8 - Aprobar examen teórico y práctico.<br/>
9 - Certificado de antecedentes penales.
 
          </Typography>
        </AccordionDetails>
      </Accordion>


      
    </div>
  );
}

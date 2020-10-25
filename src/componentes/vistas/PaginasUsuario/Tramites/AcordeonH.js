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

export default function AcordeonH() {
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
          <Typography  variant="h4"  color="textSecondary" >Mi primera habilitación</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          <Typography>
          <b><u>PRIMER HABILITACION DE UN VEHICULO</u></b><br/>        
         <b> REQUISITOS</b> <br/>
1 - Certificado original de venta de la casa representante o consesionaria (para vehiculos 0 km)<br/>
2 - Certificado firmado por Escribano Publico y copia de certificado de nacionalizacion (Para vehiculos exportados)<br/>
3 - Fotocopia de cedula verde bien legible,a nombre del Propietario actual (una de las opciones).<br/>
4 - Fotocopia autenticada por Escribania del contrato privado,mas certificado denacionalizacion o en su defecto cedulaverde anterior (una de las opciones).<br/>
5 - Fotocopia autenticada por Escribania del titulo original (una de las opciones).<br/>
6 - Cesion de Derechos, autenticada por escribania (una de las opciones).<br/>
<br/>

<b>PASOS PARA TRAMITE</b><br/>
<br/>
<b>A - REVISION</b><br/>
Cerciorese de contar con la totalidad de las documentaciones requeridas mencionadas mas arriba.<br/>
<br/>
<b>B - CONFECCION DE HABILITACION</b><br/>
Presentese en la oficina del departamento de Seguridad y transito, con las documentaciones en mano para la confeccion de habilitacion y colocacion de la calcomania correspondiente.<br/>
<br/>
<b>C - CAJA</b><br/>
Presente la orden de Pago en Caja, se le genera una factura en conceptos varios, la cual, una vez pagada se le entregara con la firma y sello del/a cajero/a.
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  variant="h4"  color="textSecondary" >Quiero Renovar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <b><u>RENOVACION DE HABILITACION</u></b><br/>
          <b>REQUISITOS</b><br/>
          
          1 - Presentar habilitacion a expirar que fue expedida en este Municipio.<br/>
          2 - Cedula verde o contrato Privado<br/>
          <br/>

<b>PASOS PARA TRAMITE</b><br/>
<br/>
<b>A - REVISION</b><br/>
Cerciorese de contar con la totalidad de las documentaciones requeridas mencionadas mas arriba.<br/>
<br/>
<b>B - CONFECCION DE HABILITACION</b><br/>
Presentese en la oficina del departamento de Seguridad y transito, con las documentaciones en mano para la confeccion de habilitacion y colocacion de la calcomania correspondiente.<br/>
<br/>
<b>C - CAJA</b><br/>
Presente la orden de Pago en Caja, se le genera una factura en conceptos varios, la cual, una vez pagada se le entregara con la firma y sello del/a cajero/a.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
           <Typography  variant="h4"  color="textSecondary" > Quiero cambiar nombre de Propietario</Typography>

        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <b><u>CAMBIO DE NOMBRE DE PROPIETARIO EN LA HABILITACION</u></b><br/>
          <b> REQUISITOS </b> <br/>
1 - Contrato Privado o Cesion de Derechos, autenticada por escribania (una de las opciones).<br/>
2 - Fotocopia de cedula verde bien legible,a nombre del Propietario actual (una de las opciones).<br/>
3 - Fotocopia autenticada por Escribania del titulo original (una de las opciones).<br/>
4 - Fotocopia de cedula del Propietario actual.<br/>
<br/>

<b>PASOS PARA TRAMITE</b><br/>
<br/>
<b>A - REVISION</b><br/>
Cerciorese de contar con la totalidad de las documentaciones requeridas mencionadas mas arriba.<br/>
<br/>
<b>B - CONFECCION DE HABILITACION</b><br/>
Presentese en la oficina del departamento de Seguridad y transito, con las documentaciones en mano para la confeccion de habilitacion y colocacion de la calcomania correspondiente.<br/>
<br/>
<b>C - CAJA</b><br/>
Presente la orden de Pago en Caja, se le genera una factura en conceptos varios, la cual, una vez pagada se le entregara con la firma y sello del/a cajero/a.
 
          </Typography>
        </AccordionDetails>
      </Accordion>



      
    </div>
  );
}

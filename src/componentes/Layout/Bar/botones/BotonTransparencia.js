import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function BotonTransparencia() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Tooltip title="Click para expandir">
        <Button
        startIcon={<KeyboardArrowDownIcon/>}
        style={{ color: '#757575' }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Transparencia
        </Button>
        </Tooltip>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList  autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
 {/*agregar botones o menus*/}
                    <MenuItem component={Link} button to="/anexopersonal" onClick={handleClose}>Nomina de funcionarios</MenuItem>
                    <MenuItem component={Link} button to="/royalties" onClick={handleClose}>Royalties</MenuItem>
                    <MenuItem component={Link} button to="/fonacide" onClick={handleClose}>Fonacide</MenuItem>
                    <MenuItem component={Link} button to="/inventario" onClick={handleClose}>Inventario</MenuItem>
                    {/* 
                    <MenuItem component={Link} button to="/presupuestos" onClick={handleClose}>Presupuestos</MenuItem>

                    <MenuItem component={Link} button to="" onClick={handleClose}>Proveedores</MenuItem>
                    <MenuItem component={Link} button to="/contrataciones" onClick={handleClose}>Contrataciones Publicas</MenuItem>
                    <MenuItem component={Link} button to="/cheques" onClick={handleClose}>Cheques Emitidas</MenuItem>
                    <MenuItem component={Link} button to="/aportes" onClick={handleClose}>Aportes a Entidades</MenuItem>
*agregar botones o menus*/}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      
    </div>
  );
}

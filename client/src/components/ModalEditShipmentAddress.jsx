import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { addShipmentAddress } from '../redux/cartRedux';

export default function ModalEditShipmentAddress() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [address, setAddress] = React.useState(
    useSelector(state => state.cart.shipmentAddress)
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (e) => {
    dispatch(addShipmentAddress(address));
    handleClose();
  }

  return (
    <div>
      <Button style={{border:"none"}} variant="outlined" onClick={handleClickOpen}>
        EDIT SHIPMENT ADDRESS
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Shipment Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert your new shipment address for delivery
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Shipping Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
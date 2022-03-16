import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Order from './Order';

const UserOrder = ({order}) => {
    return (
      <Accordion style={{width:"100%",marginBottom:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{marginLeft:"10px"}}>ORDER DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Order order={order} />
        </AccordionDetails>
      </Accordion>
    )
}

export default UserOrder

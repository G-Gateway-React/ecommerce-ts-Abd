import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { CustButton } from "./style";

const IconLabelButtons: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <CustButton variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </CustButton>
    </Stack>
  );
};

export default IconLabelButtons;

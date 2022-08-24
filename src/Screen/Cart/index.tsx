import { Typography } from "@mui/material";
import CartItem from "../../Components/cartItem";
import NavBar from "../../Components/NavBar";
import { Container } from "../../GlobelStyle";
import { BagSection, LeftCartSection, RightCartSection } from "./style";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  return (
    <>
      <NavBar
        style={{
          color: "black",
        }}
      />
      <Container
        style={{
          margin: "105px  500px 0 500px",
        }}
      >
        <BagSection>
          <LeftCartSection>
            <Typography variant="h4">Bag</Typography>
            <Typography variant="subtitle2" color="#8C8C8C">
              2 items
            </Typography>
          </LeftCartSection>
          <RightCartSection>
            <ClearIcon sx={{ cursor: "pointer" }} />
            <Typography variant="body1">REMOVE ALL</Typography>
          </RightCartSection>
        </BagSection>
        <CartItem />
        <CartItem />
      </Container>
    </>
  );
};

export default Cart;

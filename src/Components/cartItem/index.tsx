import ClearIcon from "@mui/icons-material/Clear";
import InputLabel from "@mui/material/InputLabel";
import { Box, Divider, Input, Typography } from "@mui/material";
import { Colors } from "../../Assets";
import { FlexBox } from "../../GlobelStyle";
import ControlledAccordions from "../Accordion";
import {
  CartItemDetails,
  CartItemPhoto,
  CartWrapper,
  CustomBadge,
} from "./style";

const CartItem = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <Divider
        color="#D8D8D8"
        sx={{
          borderWidth: "2px",
        }}
      />
      <CartWrapper>
        <CartItemPhoto />
        <CartItemDetails>
          <Typography fontSize={26} fontWeight={400}>
            NIKE SHOES BOYFRIEND PAIRS
          </Typography>
          <Typography fontSize={26} fontWeight={500} color="#D1094B">
            USD $340.00
          </Typography>
          <FlexBox
            style={{
              flexDirection: "column",
              marginTop: 30,
              alignItems: "start",
              color: "#000F08",
            }}
          >
            <ControlledAccordions
              text1="COLOR :"
              text2="WHITE"
              width={150}
              child={
                <FlexBox
                  style={{
                    maxWidth: 250,
                    flexWrap: "wrap",
                  }}
                >
                  {Colors.map((item) => (
                    <Box
                      key={item.id}
                      width={40}
                      height={40}
                      mr={1}
                      mb={1}
                      bgcolor={item.color}
                    />
                  ))}
                </FlexBox>
              }
            />
            <ControlledAccordions
              text1="Size :"
              text2="42"
              width={95}
              child={
                <FlexBox
                  style={{
                    maxWidth: 250,
                    flexWrap: "wrap",
                  }}
                >
                  {[40, 41, 42, 43, 44, 45, 11, 11, 11, 11, 11, 11, 11].map(
                    (item) => (
                      <div
                        style={{
                          width: 35,
                          height: 35,
                          marginRight: 1,
                          marginBottom: 2,
                        }}
                      >
                        <CustomBadge badgeContent={item} color="secondary" />
                      </div>
                    )
                  )}
                </FlexBox>
              }
            />
            <FlexBox>
              <InputLabel id="label" sx={{ color: "#000F08" }}>
                QUANTITY :
              </InputLabel>

              <Input
                type="number"
                sx={{
                  width: 50,
                }}
              />
            </FlexBox>
          </FlexBox>
        </CartItemDetails>
        <FlexBox
          style={{
            height: "inherit",
            display: "flex",
            alignItems: "end",
          }}
        >
          <ClearIcon sx={{ cursor: "pointer" }} />
          <Typography variant="body1">REMOVE</Typography>
        </FlexBox>
      </CartWrapper>
    </div>
  );
};

export default CartItem;

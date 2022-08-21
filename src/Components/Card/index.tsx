import CardMedia from "@mui/material/CardMedia";
import { StyledCard, H5 } from "./style";
// import { Typography } from '@mui/material';

interface Props {
  id: number;
  img: string;
  text: string;
}
export default function ImgMediaCard({ id, img, text }: Props) {
  return (
    <StyledCard key={id}>
      <CardMedia
        sx={{ width: "100%" }}
        component="img"
        alt="green iguana"
        image={img}
      />
      <H5>{text}</H5>
    </StyledCard>
  );
}

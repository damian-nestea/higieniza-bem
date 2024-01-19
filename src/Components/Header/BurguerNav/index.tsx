import React from "react";
import { Container } from "./styles";
import RightNav from "../RIghtNav";

export interface Props {
  open: boolean;
}

const BurguerNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Container>
      <RightNav open={open} />
    </>
  );
};

export default BurguerNav;

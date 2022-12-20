import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import items from "./data";

function Example(props: any) {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper className="object-cover ">
      <img
        className="w-full bg-cover lg:h-1/4 tel:h-[15rem] object-cover"
        src={props.item.url}
        alt="img"
      />
    </Paper>
  );
}

export default Example;

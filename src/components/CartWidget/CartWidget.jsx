import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ compras }) => {
  return (
    <div>
      <IconButton aria-label="cart">
        <Badge badgeContent={compras ? compras : 0} color="secondary">
          <ShoppingCartIcon fontSize="medium" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;

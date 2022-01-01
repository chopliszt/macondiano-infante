import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = ({ compras }) => {
  return (
    <div>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge badgeContent={compras ? compras : 0} color="secondary">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartWidget;

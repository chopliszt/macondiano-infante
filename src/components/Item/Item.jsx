import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = ({ id, proyecto, img, valor, etapa }) => {
  return (
    <div className="row mt-3 mb-4 me-3 d-inline-flex ">
      <div className="col">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${proyecto}-${etapa}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              El valor del apartamento es: {valor}
            </Typography>
          </CardContent>
          <CardActions>
            <div className="col">
              <Link to={`/detail/${id}`}>
                <button className="btn btn-outline-warning">Detalle</button>
              </Link>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Item;

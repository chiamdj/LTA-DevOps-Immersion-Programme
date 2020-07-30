import React, { useState, useRef, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";
import "./App.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function App() {
  const [listItems, setListItems] = useState(["Cockles", "Hum", "Mee Siam"]);
  const [textBox, setTextBox] = useState(false);

  function appendItem(item) {
    setListItems(listItems.concat(item));
    setTextBox(false);
  }

  function removeItem(item) {
    console.log(item);
    setListItems(listItems.filter((i) => i !== item));
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#80cbc4",
      }}
    >
      <Card
        style={{
          width: 500,
          padding: 10,
        }}
      >
        <CardContent>
          <Typography variant="h4">Shopping List</Typography>
          <Divider />

          <List component="nav" aria-label="main mailbox folders">
            {listItems.map((item) => (
              <div>
                <ListItem button onClick={(e) => removeItem(item)}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                  <DeleteForeverIcon style={{ color: "red" }} />
                </ListItem>
              </div>
            ))}
            {textBox ? (
              <div>
                <ListItem>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <TextField
                    autoFocus
                    label="Enter item"
                    style={{ width: "100%" }}
                    onKeyPress={(e) =>
                      e.key === "Enter" ? appendItem(e.target.value) : null
                    }
                  />
                </ListItem>
                <Typography style={{ marginLeft: 70 }} variant="subtitle1">
                  Press Enter to add{" "}
                </Typography>
              </div>
            ) : null}
          </List>
        </CardContent>
        <CardActions>
          <Button onClick={() => setTextBox(true)} size="small">
            Add Item
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;

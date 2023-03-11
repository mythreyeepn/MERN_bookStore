import axios from "axios";
import {
  FormLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URL = "http://localhost:5000/books/";

const BookDetail = () => {
  const id = useParams().id;
  const history = useNavigate()
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchHandle = async () => {
      await axios
        .get(`${URL}${id}`)
        .then((res) => res.data)
        .then((data) => {
          setInputs(data.book);
          setChecked(data.book.avilable);
        });
    };
    fetchHandle();
  }, [id]);

  const updateBook = (e) => {
    e.preventDefault();
    updateHandle().then(()=>history('/books'))
  };

  const updateHandle = async () => {
    await axios.put(`${URL}${id}`,{
      name:String(inputs.name),
      description:String(inputs.description),
      price:Number(inputs.price),
      author:String(inputs.author),
      image:String(inputs.image),
      avilable:Boolean(checked), 
    }).then(res=>res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form onSubmit={updateBook}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginBottom={10}
          maxWidth={450}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Author</FormLabel>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <FormLabel>Desription</FormLabel>
          <TextField
            margin="normal"
            value={inputs.description}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            name="description"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button variant="contained" type="submit">
            Update Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BookDetail;

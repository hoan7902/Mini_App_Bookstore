import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    isbn: "",
    name: "",
    edition: "",
    publicYear: "",
    company: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        isbn: String(inputs.isbn),
        name: String(inputs.name),
        edition: String(inputs.edition),
        publicYear: String(inputs.publicYear),
        company: String(inputs.company),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      > 
      <FormLabel>ISBN</FormLabel>
      <TextField
        value={inputs.isbn}
        onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="isbn"
      />
        <FormLabel>Tên sách</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Ấn bản</FormLabel>
        <TextField
          value={inputs.edition}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="edition"
        />
        <FormLabel>Năm phát hành</FormLabel>
        <TextField
          value={inputs.publicYear}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="publicYear"
        />
        <FormLabel>Nhà xuất bản</FormLabel>
        <TextField
          value={inputs.company}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="company"
        />
        <FormLabel>Tác giả</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Mô tả</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Giá</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Ảnh</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <Button variant="contained" type="submit" mb='20px'>
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;

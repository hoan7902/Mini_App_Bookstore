import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box height='70vh' display="flex" flexDirection="column" alignItems="center" justifyContent='center'>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2" mb= '50px'>
          E-Book Project for Assignment 2
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2" mb= '50px'>
          By BKU Students
        </Typography>

        <Typography sx={{ fontFamily: "fantasy" }} variant="h4" color='#0c6aaa' mb='10px'>
          Ho Ngoc An - 2012548
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4" color='#0c6aaa' mb='10px'>
          Cao Tran Anh Khoa - 2010335
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4" color='#0c6aaa' mb='10px'>
          Pham Nhat Linh - 2013641
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4" color='#0c6aaa' mb='10px'>
          Tran Nguyen Vu - 2012445
        </Typography>
      </Box>
    </div>
  );
};

export default About;

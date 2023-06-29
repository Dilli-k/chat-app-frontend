import React from "react";
import { Box, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const isAuthenticated = true;

const DashboardLayout = () => {
  if (!isAuthenticated) {
    return <Navigate to="./auth/login" />;
  }

  return (
    <Stack direction={"row"}>
      <Box sx={{ display: "flex" }}>
        {/* SideBar */}
        <SideBar />
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;

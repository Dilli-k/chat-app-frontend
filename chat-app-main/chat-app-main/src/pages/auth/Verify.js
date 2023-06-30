import React from "react";
import { Stack, Typography } from "@mui/material";
import VerifyForm from "../../sections/auth/VerifyForm";

const Verify = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Please Verify OTP</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Sent to email (ngukdk670@gmail.com)</Typography>
        </Stack>
        {/* Verify Form */}
        <VerifyForm />
      </Stack>
    </>
  );
};

export default Verify;
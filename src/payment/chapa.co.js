import { Button, Typography } from "@mui/material";
import { chapaFee, chapaPublickey } from "./config";
import chapaLogo from "../assets/chapa-logo.png";

export const ChapaPayment = ({
  amount,
  email,
  first_name,
  last_name,
  btn_name,
  return_url,
  short_reason,
  disable,
}) => {
  const randNumber = Math.floor(Math.random() * 4);
  const tx_ref = `${short_reason}-${first_name}-${randNumber}`;
  const trxFee = Number(amount) * chapaFee; //transaction fee
  const totalPayAmount = trxFee + Number(amount);

  console.log("transaction number : " + amount);
  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input type="hidden" name="public_key" value={chapaPublickey} />
      <input type="hidden" name="tx_ref" value={tx_ref} />
      <input type="hidden" name="amount" value={totalPayAmount} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="first_name" value={first_name} />
      <input type="hidden" name="last_name" value={last_name} />
      <input type="hidden" name="title" value="Let us do this" />
      <input
        type="hidden"
        name="description"
        value="Paying with Confidence with cha"
      />
      <input
        type="hidden"
        name="logo"
        value="https://yourcompany.com/logo.png"
      />
      <input
        type="hidden"
        name="callback_url"
        value="http://localhost:3000/users"
      />
      <input type="hidden" name="return_url" value={return_url} />
      <input type="hidden" name="meta[title]" value="test" />
      <Button
        variant="contained"
        type="submit"
        sx={{
          textTransform: "none",
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
        startIcon={<img src={chapaLogo} width="28px" />}
        size="small"
        color={"primary"}
        disabled={disable}
      >
        <Typography sx={{ pb: 1 }}>{btn_name}</Typography>
      </Button>
    </form>
  );
};

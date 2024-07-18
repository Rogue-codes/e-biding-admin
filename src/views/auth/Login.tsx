import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface ILoginForm {
  username: string;
  password: string;
}

export default function Login() {
  const {
    control,
    formState: { isValid },
    // handleSubmit,
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const renderAdornment = () => {
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[40vw] p-6 mt-[10rem] rounded-xl shadow-sm h-[25rem] border">
        <div className="border-b-2 w-[7.5rem] border-EBD-Primary ">
          <p className="text-lg text-EBD-Primary font-semibold">Admin Login</p>
        </div>
        <form action="" className="mt-16">
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Controller
              name="username"
              control={control}
              rules={{
                required: "username is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "text/character not supported",
                },
              }}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  {...fields}
                  variant="outlined"
                  placeholder="Enter first name"
                  inputProps={{ "data-testid": "firstname" }}
                  fullWidth
                  inputRef={ref}
                  InputProps={{
                    color: fields.value && !error ? "success" : undefined,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </FormControl>

          <FormControl
            sx={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Controller
              name="password"
              control={control}
              rules={{
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  {...fields}
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  placeholder="Enter password"
                  inputProps={{ "data-testid": "firstname" }}
                  fullWidth
                  inputRef={ref}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    color: fields.value && !error ? "success" : undefined,
                    endAdornment: renderAdornment(),
                  }}
                />
              )}
            />
          </FormControl>

          <Button
            style={{
              background: "#3E4095",
              paddingTop: 10,
              paddingBottom: 10,
              marginTop: "2rem",
              color: "#fff",
              fontWeight: 600,
            }}
            type="button"
            variant="contained"
            className="w-full bg-EBD-Primary"
            disabled={!isValid}
          >
            login
          </Button>
        </form>
      </div>
    </div>
  );
}

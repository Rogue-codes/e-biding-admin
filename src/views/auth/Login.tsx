import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useLoginMutation } from "../../api/auth.api";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { loginUser } from "../../configs/authSlice";

interface ILoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
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

  const [login, { isLoading, isSuccess, data }] = useLoginMutation();

  console.log("data", data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar(data?.message, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      dispatch(
        loginUser({
          data: {
            email: data?.data?.email,
            username: `${data?.data?.firstName} ${data?.data?.lastName}`,
          },
          access_token: data?.data?.access_token,
        })
      );
    }
  });

  const submitForm = (values: ILoginForm) => {
    login(values)
      .unwrap()
      .catch((e: any) => {
        console.log(e);
        enqueueSnackbar(e?.data?.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[40vw] p-6 mt-[10rem] rounded-xl shadow-sm h-[25rem] border">
        <div className="border-b-2 w-[7.5rem] border-EBD-Primary ">
          <p className="text-lg text-EBD-Primary font-semibold">Admin Login</p>
        </div>
        <form action="" className="mt-16" onSubmit={handleSubmit(submitForm)}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({
                field: { ref, ...fields },
                fieldState: { error },
              }) => (
                <TextField
                  {...fields}
                  variant="outlined"
                  placeholder="Enter username"
                  inputProps={{ "data-testid": "firstname" }}
                  fullWidth
                  inputRef={ref}
                  InputProps={{
                    color: fields.value && !error ? "success" : undefined,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={Boolean(error?.message)}
                  FormHelperTextProps={{
                    sx: {
                      color: "red",
                    },
                  }}
                  helperText={error?.message}
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
            type="submit"
            variant="contained"
            className="w-full bg-EBD-Primary disabled:opacity-50"
            disabled={!isValid}
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  color: "white",
                }}
                size={15}
              />
            ) : (
              "login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

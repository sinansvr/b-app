import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import useAuthCall from '../hooks/useAuthCall';
import { notify } from '../helper/sweetAlert';


const registerSchema = object({
  username: string().required(),
  first_name: string().required(),
  last_name: string().required(),
  email: string().email().required(),
  password: string().required().matches(/[a-z]/).matches(/[A-Z]/).matches(/\d+/).matches(/[!,?{}><%&$#£+-.]+/),
  // password2: string().required().matches(/[a-z]/).matches(/[A-Z]/).matches(/\d+/).matches(/[!,?{}><%&$#£+-.]+/)
});



export default function Register() {
  const { register } = useAuthCall()


  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik
          initialValues={{ username: "", first_name: "", last_name: "", email: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register({ ...values, password2: values.password })
            actions.resetForm()
            actions.setSubmitting(false)
            notify("Successfully registred","success")

          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form >
              <Box onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={errors.username}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  error={touched.first_name && Boolean(errors.first_name)}
                  helperText={errors.first_name}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  error={touched.last_name && Boolean(errors.last_name)}
                  helperText={errors.last_name}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={errors.password}
                />

              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>

      </Box>

    </Container>

  );
}
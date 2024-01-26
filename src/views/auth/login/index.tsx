import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GeegpayLogo from "../../../assets/svg/logo.svg";
import Button from "../../../components/button";
import { FormInput } from "../../../components/input/formInput";
import { useTheme } from "../../../context";
import { keyConstants } from "../../../helper/keyConstants";

export const Login = () => {
  const { isDarkMode } = useTheme();
  const initialValues = {
    password: "",
    email: "",
  };

  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = async () => {
    const tokenExpire = new Date(new Date().getTime() + 3.456e8).getTime();
    localStorage.setItem(
      keyConstants.EXPIRY_TOKEN_TIME,
      tokenExpire.toString()
    );
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="text-center text-base font-semibold text-light flex gap-2 items-center">
          <img src={GeegpayLogo} alt="pay" /> GeegPay
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {(formik) => (
            <>
              <Form className="my-5 w-[90%] md:w-1/2 lg:w-[500px]">
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder="abayomi.tosin2017@gmail.com"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="!rounded-sm"
                />

                <div className={!formik.errors.email ? "!mt-5" : ""}>
                  <FormInput
                    name="password"
                    label="Password"
                    placeholder="xxxxx"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="!rounded-sm"
                  />
                </div>

                <Button
                  className={`!mt-6 !py-4 !rounded-sm ${
                    isDarkMode
                      ? "bg-[#34CAA5]"
                      : "bg-[#34CAA5] text-gray200 disabled:cursor-not-allowed"
                  }`}
                  isLoading={formik.isSubmitting || loading}
                  disabled={!formik.isValid}
                  type="submit"
                >
                  login
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

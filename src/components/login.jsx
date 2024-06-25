import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import useFetch from "@/hooks/use-fetch";
import { logins } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/context";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  let [searchParams] = useSearchParams("createNew");
  const longLink = searchParams.get("createNew");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const { data, error, fn: fnLogin, loading } = useFetch(logins, formData);

  const { fetchUser } = UrlState();

  useEffect(() => {
    if (error === null && data) {
      console.log(data);
      navigate(`/dashboard?${longLink ? `createNew= ${longLink}` : ""}`);
      fetchUser();
    }
  }, [data, error]);

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 character")
          .required("Password is required"),
      });
      await schema.validate(formData, { abortEarly: false });
      //api call
      await fnLogin();
    } catch (e) {
      const newError = {};
      e?.inner?.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>to your account if you already have</CardDescription>
          {error && <Error message={error.message} />}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleInputChange}
            />
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            {errors.password && <Error message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => handleLogin()}>
            {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

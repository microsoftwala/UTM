import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UrlState } from "@/context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Error from "./error";
import { Card } from "./ui/card";
import * as yup from "yup";
import { useRef, useState, useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { QRCode } from "react-qrcode-logo";
import { createUrls } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";

const CreateLink = () => {
  const { user } = UrlState();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [errors, setErrors] = useState({});
  const longlink = searchParams.get("createNew");

  const ref = useRef();

  const [formValues, setFormValues] = useState({
    title: "",
    longUrl: longlink ? longlink : "",
    customUrl: "",
  });

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    longUrl: yup
      .string()
      .url("Must be valid URL")
      .required("Long Url required"),
    customUrl: yup.string(),
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const {
    loading,
    error,
    data,
    fn: fnCreateUrl,
  } = useFetch(createUrls, { ...formValues, user_id: user.id });

  const createNewLink = async () => {
    setErrors([]);
    try {
      await schema.validate(formValues, { abortEarly: false });

      const canvas = ref.current.canvasRef.current;
      const blob = await new Promise((resolve) => canvas.toBlob(resolve));

      await fnCreateUrl(blob);
    } catch (e) {
      const newErrors = {};

      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  useEffect(() => {
    if (error === null && data) {
      navigate(`/link/${data[0].id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  return (
    <Dialog defaultOpen={longlink}>
      <DialogTrigger>
        <Button variant="destructive">Create New Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Create New</DialogTitle>
        </DialogHeader>

        {formValues?.longUrl && (
          <QRCode value={formValues?.longUrl} size={125} ref={ref} />
        )}

        <Input
          id="title"
          placeholder="Short Link title"
          value={formValues.title}
          onChange={handleChange}
        />
        {errors.title && <Error message={errors.title} />}

        <Input
          id="longUrl"
          placeholder="Enter your Long Url"
          value={formValues.longUrl}
          onChange={handleChange}
        />
        {errors.longUrl && <Error message={errors.longUrl} />}

        <div className="flex items-center gap-2">
          <Card className="p-2">Short.in</Card>/
          <Input
            id="customUrl"
            placeholder="Custom Link (optional)"
            value={formValues.customUrl}
            onChange={handleChange}
          />
        </div>
        {error && <Error message={error.message} />}

        <DialogFooter className="sm:justify-start">
          <Button
            variant="destructive"
            type="submit"
            onClick={createNewLink}
            disable={loading}
          >
            {loading ? <BeatLoader color="white" size={10} /> : "Create Link"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLink;

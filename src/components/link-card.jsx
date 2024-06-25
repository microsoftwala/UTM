import { Copy, Download, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { deleteUrls } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";

const LinkCard = ({ url, fetchUrls }) => {
  const handleDownload = () => {
    const imageUrl = url?.qr;
    const filename = url?.title;

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
  };

  const { loading: loadingDelete, fn: fnDelete } = useFetch(
    deleteUrls,
    url?.id
  );

  return (
    <div className="flex flex-col md:flex-row gap-5 border p-4 bg-gray-900 rounded-lg">
      <img
        src={url?.qr}
        alt="QR Code"
        className="h-32 object-contain ring ring-blue-500 self-start"
      />

      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-2xl font-extrabold hover:underline cursor-pointer">
          {url?.title}
        </span>
        <span className="text-xl font-extrabold hover:underline cursor-pointer text-blue-700">
          http://localhost:5173/
          {url?.custom_url ? url?.custom_url : url?.short_url}
        </span>
        <span className="font-bold hover:underline cursor-pointer flex items-center gap-1 flex-1">
          {url?.original_url}
        </span>
        <span className="flex items-end flex-1 hover:underline font-extralight">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>

      <div className="flex gap-2">
        <Button
          variant="ghost"
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:5173/${url?.short_url}`
            );
          }}
        >
          <Copy />
        </Button>
        <Button variant="ghost" onClick={handleDownload}>
          <Download />
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            fnDelete().then(() => {
              fetchUrls();
            });
          }}
          disable={loadingDelete}
        >
          {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash />}
        </Button>
      </div>
    </div>
  );
};

export default LinkCard;

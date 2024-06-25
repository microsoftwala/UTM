import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [longUrl, setLongUrl] = useState();

  const handelShorten = (e) => {
    e.preventDefault();
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 min-h-full">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold ">
        The URL Shortner <br />
        you&rsquo;ll need many times!!!
      </h2>
      <form
        onSubmit={handelShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-1/2 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter Your long url!"
          className="h-full flex-1 py-4 px-4"
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>

      {/* <img src="/banner.jpeg " alt="banner" className="w-full my-11 md:px-11" /> */}

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How Does URL Shortner Work</AccordionTrigger>
          <AccordionContent>
            First You have to login and give long url it will convert in short
            URL.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;

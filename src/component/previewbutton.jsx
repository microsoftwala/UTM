import { VscPreview } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const PreviewButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/preview");
      }}
    >
      <VscPreview />
    </button>
  );
};

export default PreviewButton;

import { VscPreview } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const PreviewButton = ({ onDisable }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/preview");
      }}
      disabled={onDisable}
      className={onDisable ? "text-gray-500":"cursor-pointer"}
    >
      <VscPreview />
    </button>
  );
};

export default PreviewButton;

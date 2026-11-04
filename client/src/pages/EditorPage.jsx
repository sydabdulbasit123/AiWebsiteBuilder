import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App.jsx";

const EditorPage = () => {
  const { id } = useParams();

  useEffect(() => {
    const handlegetWebsite = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/website/get-by-id/${id}`,
          {
            withCredentials: true,
          },
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    handlegetWebsite();
  }, [id]);

  return <div>EditorPage</div>;
};

export default EditorPage;

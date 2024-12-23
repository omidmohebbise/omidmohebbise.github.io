

import { Badge } from "react-bootstrap";

interface PostPageProps {
    params: {
      id: string;
    };
  }

const AiPage: React.FC<PostPageProps> = ({ params }) => {
  const { id } = params;

  return <div>Post ID: {id}</div>;
};

export default AiPage;
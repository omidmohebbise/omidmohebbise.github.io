

import { Badge } from "react-bootstrap";

interface PostPageProps {
    params: {
      id: string;
    };
  }

const AiPage: React.FC<PostPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div className="container py-5">
      <p className="section-label">AI</p>
      <h1 className="section-title">Common Models</h1>
      <hr className="section-rule" />
      <div>Post ID: {id}</div>
    </div>
  );
};

export default AiPage;

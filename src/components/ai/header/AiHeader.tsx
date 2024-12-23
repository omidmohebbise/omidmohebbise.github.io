import { Badge } from "react-bootstrap";

export enum AiPageHeaders {
    Intro = 'intro',
    Models = 'models',
    Learning = 'learning',
    AITools = 'tools',
}



const AiPageHeader: React.FC<AiPageHeaders> = ({ selected }) => {

    let cssClass = "mx-1"
    console.log(selected)
    console.log("DDDD")

    return <div>
        <Badge className={cssClass} color={selected===AiPageHeaders.Intro ? "success" : ""}>Introduction</Badge>
        <Badge className={cssClass} color={selected===AiPageHeaders.Models ? "success" : ""}>Common models</Badge>
        <Badge className={cssClass} color={selected===AiPageHeaders.Learning ? "success" : ""}>AI Learning</Badge>
        <Badge className={cssClass} color={selected===AiPageHeaders.AITools ? "success" : ""}>AI Tools</Badge>

    </div>;
};

export default AiPageHeader;
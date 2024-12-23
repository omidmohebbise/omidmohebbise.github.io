import { Badge } from "react-bootstrap";

export enum Headers {
    Intro = 'intro',
    Models = 'models',
    Learning = 'learning',
    AITools = 'tools',
}

interface AiPageHeaderProps {
    selected: Headers; 
}

const AiPageHeader: React.FC<AiPageHeaderProps> = ({ selected }) => {

    let cssClass = "mx-1"
    console.log(selected)
    console.log("DDDD")

    return <div>
        <Badge className={cssClass} color={selected===Headers.Intro ? "success" : ""}>Introduction</Badge>
        <Badge className={cssClass} color={selected===Headers.Models ? "success" : ""}>Common models</Badge>
        <Badge className={cssClass} color={selected===Headers.Learning ? "success" : ""}>AI Learning</Badge>
        <Badge className={cssClass} color={selected===Headers.AITools ? "success" : ""}>AI Tools</Badge>

    </div>;
};

export default AiPageHeader;
import { Request, Response, NextFunction } from 'express';

interface JSON_To_HTML_Template {
    html: HTML_Tag
}
interface HTML_prop {
    [ prop:string ] : string
}

interface HTML_Tag {
    content: string,
    name: string,
    hasClosing: boolean,
    props: HTML_prop,
    children: Array<HTML_Tag>,
}

const parseProps = (props : HTML_prop) => {
    let propsString = "";
    for (let prop in props){
        propsString+=" "+props[prop];
    }
    return propsString;
}

const parseTag = (htmlTag : HTML_Tag) => {
    let opening = `<${htmlTag.name} ${parseProps(htmlTag.props)}>`;
    if(!htmlTag.hasClosing){
        return opening;
    }
    return opening+`${htmlTag.content}</${htmlTag.name}>`;
}

const parse_JSON_To_HTML = (htmlTag : HTML_Tag) : string => {
    if(htmlTag.children.length == 0){
        return parseTag(htmlTag);
    }
    return htmlTag.children.reduce(
        (prev : string, current : HTML_Tag) => {
            return prev + parse_JSON_To_HTML(current);
        },
        ""
    )
}

export const generateHTML = async (req: Request, res:Response, next: NextFunction) => {
    const data  = req.body;

    const generatedHTML = parse_JSON_To_HTML(data);
    console.log(generatedHTML);
    res.status(201);
    res.send(generatedHTML);
}
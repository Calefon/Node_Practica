"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHTML = void 0;
const parseProps = (props) => {
    let propsString = "";
    for (let prop in props) {
        propsString += " " + props[prop];
    }
    return propsString;
};
const parseTag = (htmlTag) => {
    let opening = `<${htmlTag.name} ${parseProps(htmlTag.props)}>`;
    if (!htmlTag.hasClosing) {
        return opening;
    }
    return opening + `${htmlTag.content}</${htmlTag.name}>`;
};
const parse_JSON_To_HTML = (htmlTag) => {
    if (htmlTag.children.length == 0) {
        return parseTag(htmlTag);
    }
    return htmlTag.children.reduce((prev, current) => {
        return prev + parse_JSON_To_HTML(current);
    }, "");
};
const generateHTML = async (req, res, next) => {
    const data = req.body;
    const generatedHTML = parse_JSON_To_HTML(data);
    console.log(generatedHTML);
    res.status(201);
    res.send(generatedHTML);
};
exports.generateHTML = generateHTML;

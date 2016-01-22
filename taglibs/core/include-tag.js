module.exports = function nodeFactory(elNode, context) {
    if (!elNode.attributes || !elNode.attributes.length) {
        context.addError(elNode, 'Invalid <include> tag. "template" attribute is missing. Example; <include template=\'...\'>');
        return elNode;
    }

    var templatePath;
    for (var i = 0; i < elNode.attributes.length; i++) {
        if (elNode.attributes[i].name == 'template' && elNode.attributes[i].value && elNode.attributes[i].value.value) {
            templatePath = elNode.attributes[i].value.value;
            break;
        }
    };
    if (!templatePath) {
        context.addError(elNode, 'Invalid <include> tag. "template" attribute is missing. Example; <include template=\'...\'>');
        return elNode;
    }
    var dirname = context.context.dirname;

    return context.builder.includeStatement(templatePath, dirname);
};

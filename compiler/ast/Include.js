'use strict';

var Node = require('./Node');

var nodePath = require('path');
var req = require;
var fs;
try {
    fs = req('fs');
} catch (e) {}

class Include extends Node {
    constructor(def) {
        super('Include');
        this.templatePath = def.templatePath;
        this.dirname = def.dirname;
    }

    generateCode(codegen) {
        var resourcePath = nodePath.resolve(this.dirname, this.templatePath);
        if (!fs.existsSync(resourcePath))
            throw new Error('Resource not found: ' + resourcePath);

        var contents = fs.readFileSync(resourcePath, {encoding: 'utf8'});
        codegen.addWriteLiteral(contents);
    }

}

module.exports = Include;

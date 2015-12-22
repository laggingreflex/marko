'use strict';

module.exports = function(builder) {
    var vars = [];

    return builder.program([
            builder.slot((slot, generator) => {
                slot.setContent(generator.builder.vars(vars));
            }),
            builder.node(function(node, generator) {
                vars.push({
                    id: 'foo',
                    init: generator.builder.literal('abc')
                });
            }),
            builder.node(function(node, generator) {
                vars.push({
                    id: 'bar',
                    init: generator.builder.literal(123)
                });
            })
        ]);
};
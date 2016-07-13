"use strict";
var glob = require('glob');
var fm = require('front-matter');
var marked = require('marked');
var fs = require('fs');

var data = {
    projects: []
};

glob('/Users/karasek/Dev/projects/polymerprojects/**/*.md', function(er, files) {
    files.forEach(function(file) {
        var contents = fs.readFileSync(file, 'utf8');
        var fileData = fm(contents);
        fileData.html = marked(fileData.body);
        data.projects.push(fileData);
    });
    // console.log('all done', data);
    fs.writeFileSync('./app/content.json', JSON.stringify(data, null, '  '));
});


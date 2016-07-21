"use strict";
var glob = require('glob');
var fm = require('front-matter');
var marked = require('marked');
var fs = require('fs');
var moment = require('moment');

var data = {
    projects: []
};

// Takes one or two unix timestamps and returns a stand date as a string
var dateHelper = function(startDate, endDate) {
    // console.log('startDate is ', startDate);
    // console.log('formated date is ', moment(startDate).format("MMM Do YY"));
    var dateString = "";
    dateString += startDate ? moment(startDate).format("MMM Do 'YY") : "";
    dateString += endDate ? " - " + moment(endDate).format("MMM Do 'YY") : "";
    console.log(dateString);
    return dateString;
};

glob('/Users/karasek/Dev/projects/polymer/app/resources/projects/**/*.md', function(er, files) {
    files.forEach(function(file) {
        // read and store content of file
        var contents = fs.readFileSync(file, 'utf8');
        // convert content with YAML frontmatter into JSON
        var fileData = fm(contents);
        // convert markdown in main content to html
        fileData.html = marked(fileData.body);
        // convert timestamps to standard english
        fileData.attributes.dates = dateHelper(fileData.attributes.startDate, fileData.attributes.endDate);
        data.projects.push(fileData);
    });
    // console.log('all done', data);
    fs.writeFileSync('./app/resources/content.json', JSON.stringify(data, null, '  '));
});


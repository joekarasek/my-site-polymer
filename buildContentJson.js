"use strict";
var glob = require('glob');
var fm = require('front-matter');
var marked = require('marked');
var fs = require('fs');
var moment = require('moment');


// Takes one or two unix timestamps and returns a stand date as a string
var dateHelper = function(startDate, endDate) {
    var dateString = "";
    dateString += startDate ? moment(startDate).format("MMM Do 'YY") : "";
    dateString += endDate ? " - " + moment(endDate).format("MMM Do 'YY") : " - present";
    return dateString;
};

// Glob markdown files, convert yaml front-matter to json, sort, and write
glob('/Users/karasek/Dev/projects/polymer/app/resources/projects/**/*.md', function(er, files) {
    var data = {
        projects: []
    };

    files.forEach(function(file) {
        // read and store content of file
        var contents = fs.readFileSync(file, 'utf8');
        // convert content with YAML frontmatter into JSON
        var fileData = fm(contents);
        // convert markdown in main content to html
        fileData.html = marked(fileData.body);
        // convert timestamps to standard english
        fileData.attributes.dates = dateHelper(fileData.attributes.startDate, fileData.attributes.endDate);
        // pushes fileData to data object if hidden is not set to true
        if (!fileData.attributes.hidden) data.projects.push(fileData);
    });

    // Sort projects in json by start date
    data.projects.sort(function(a,b) {
       return moment(b.attributes.startDate) - moment(a.attributes.startDate);
    });

    fs.writeFileSync('./app/resources/content.json', JSON.stringify(data, null, '  '));
});


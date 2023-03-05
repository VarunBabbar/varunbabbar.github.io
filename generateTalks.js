
var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('_pages/talks.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('_pages/talks_in_markdown.html', markdownReadMe);
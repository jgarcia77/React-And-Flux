'use strict';

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generated = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id) {
        var author = _.find(authors, { id: id });
        return _clone(author);
    },

    saveAuthor: function(author) {
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if(author.id) {
            var existingAuthorIndex = _.indexOf(author, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);    
        } else {
            author.id = _generated(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id) {
        _.remove(authors, { id: id });
    }
};

module.exports = AuthorApi;
nodejs-boilerplate
==================

This is a very simple starter kit for a [Node.js](http://nodejs.org/) project.

I created it to initiate quickly a new project for [Coding Dojos](http://codingdojo.org/cgi-bin/wiki.pl?WhatIsCodingDojo), especially Randori Katas based on the [Node.js](http://nodejs.org/) framework.

So it is intentionally minimalist !

Unit tests
----------

Unit tests are located in the test directory. They are based on [Mocha](http://mochajs.org/) and [Assert](http://nodejs.org/api/assert.html).

Run the `test` target of the Makefile to execute the unit tests : 

> make test

Continuous testing
------------------

Run the `watch` target of the Makefile to run the tests when modifications are detected (based on [Nodemon](https://github.com/remy/nodemon)) : 

> make watch


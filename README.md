# chatterbox-client
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# Chatterbox
This assignment constitutes the beginning of a multi-sprint journey exploring client-server architecture. Today, you'll build a chat client that allows you to communicate with your fellow students. You'll do this using $.ajax to save (POST) and fetch (GET) JSON data to and from a remote server.

# High Level Goals of this Sprint
Successfully implement a request-response based chat application using component-based thinking with good sepration of concerns.
Gain experience interacting with a REST API (in this case the Parse REST API)
Gain exposure to some common Browser Security themes
Key HTTP Vocabulary
The following reading will expose you to a lot of vocabulary having to do with HTTP. You don't need to memorize these terms yet, but be prepared to revisit them and commit them to memory when you begin your job hunt as you can expect to be asked about them during phone screens.

# Request-Response Communication
The HTTP Session section of Wikipedia's Hypertext Transfer Protocol page
The Request Methods section of Wikipedia's Hypertext Transfer Protocol page
List of HTTP Status Codes. Don't read this entirely, but at least look into what each of the NXX (e.g. 2XX, 3XX) sections mean.
# Browser Security
Read all about Cross-site scripting (XSS). You may find this Interactive Tutorial on Cross-site scripting (XSS) or this one from Google useful. Note that these tutorials are pretty hard, you don't have to complete them if you don't find them useful.
Tools You'll Use
# ES6
The ECMAScript specification is a scripting language specification upon which JavaScript implementations (such as those found in web browsers like Chrome) are based. In June 2015, the 6th edition of the ECMAScript standard was finalized, and is commonly referred to as ES6. This was the first major update to the language since 2009. Since then, the committe that decides on language updates has released ES7, ES8 and ES9 (about one update per year) with several smaller but important language improvements.

We encourage you to try experimenting with some new features. Here are some suggested ones for this sprint:

arrow functions
spread (...) operator
rest parameters
object literal extensions
for...of loops
template strings
# Package Management
A package manager is a tool for automating the process of installing, upgrading, configuring and managing dependencies (underscore, jquery, etc) for projects. Most package managers run through a command-line interface.

Today, you'll use a popular package manager called npm to install and keep track of the tools your client-side code requires.

# Parse API
We've set up a remote server using the Parse platform. Later (as part of a different sprint) you'll build your own (local) server and replace the (remote) one you're using today.

Since you'll eventually reuse parts of your solution to this sprint, try to make your code readable/maintainable so that future-you doesn't get angry at present-you for making things messy.

Parse has documented their REST API here. Please note that you will only need to use a small part of it. In the Quick Reference section, there's a heading named "Objects" that you'll need to refer to. You'll also need to refer to the Request Format section.

Parse is a very generalized system and will allow you to store any kind of object you like. During this sprint, we'll be using it as a shared message server that everyone in the class can read and write from (via REST).

The message objects you send to the parse server (via POST requests) should be in the following format:

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

To get you started, here's an example POST request. Note that any messages you POST to the server are viewable by everyone, so be nice.

$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

# API Keys and Git
You should NEVER check in API Keys to version control. It's easy to accidentally commit sensitive data to your git repo if you're not careful. If you do so (and push to GitHub), everyone will have access to your private keys (which means they can mess with your data).

A common practice (which we adopt here) is to prevent that by storing our API keys in a special file config.js (referenced in client/index.html) that we add to our .gitignore so that it's never committed to our repo. This means that after you clone down the repo, before running the app, you must re-create that special file and add your API keys to it or the app won't run.

To make this easier and less prone to breakage, we create a dummy file (which we do commit) in the correct format, and add placeholders for the real data within it. In this application, that dummy file is located at client/env/config.example.js.

To get your application running with the real API keys, follow these steps:

Duplicate client/env/config.example.js renaming it to client/env/config.js in the process.
NOTE: client/env/config.js is also ignored in your .gitignore so that the API keys you add won't be committed.
Replace the placeholder strings in your newly created client/env/config.js with the keys delivered by your Coordinator
Update the CAMPUS variable with your campus identifier (ex: atx, nyc, la, sfm6, sfm8, hrr, rpt, etc).

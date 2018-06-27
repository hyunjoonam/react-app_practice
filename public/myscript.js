var React = require('react');
var ReactDOM = require('react-dom');

var otherScript = require('./otherScript.js');

const books = [
    { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
    { title: 'War and Peace', author: 'Leo Tolstoy' },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas' },
    { title: 'The Federalist Papers', author: 'Alexander Hamilton', featured: true },
    { title: 'Common Sense', author: 'Thomas Paine', featured: true },
];

// const h = React.createElement;

// let create element
// let container = h('div', null, [
//     h('h1', null, 'Bookstore'),
//     h('ul', null, books.map(book => {
//         return h('li', null, book.title);
//     }) ),
//     h('footer', null, 'Copyright 2019')
// ]);

// let conatinerJSX = (
//     <div>
//         <h1>Bookstore</h1>
//         <ul>
//             {books.map(book => <li>{book.title}</li>)}
//         </ul>
//         <footer>Copyright 2019</footer>
//     </div>
// )

// var conatiner = h('div', null, "bye")

ReactDOM.render(
    conatiner,
    document.querySelector('.react-root')
)


// ==========================================================


// var React = require('react');
// var myComponent = require('./otherScript.js');
// ReactDOM.render(
//     myComponent,
//     document.querySelector('.react-root')
// )
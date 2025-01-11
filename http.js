module.exports = require("./").http;
// Eski kod (Node.js native http modülü kullanılarak)
const http = require('http');
http.get('http://example.com', (response) => {
    console.log(response);
});

// Yeni kod (follow-redirects kullanılarak)
const { http } = require('follow-redirects');
http.get('http://example.com', (response) => {
    console.log(response.responseUrl); // Yönlendirme sonucu URL
});

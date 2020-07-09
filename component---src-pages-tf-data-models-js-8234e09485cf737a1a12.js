(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{DvIo:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("qw4X"),c=l("MhSK"),u=l("Bl7J"),m=l("vrFN"),E=function(){return n.a.createElement("article",null,n.a.createElement("h2",null,"Resource Templates as Labels (Classes)"),n.a.createElement("p",null,"Taking a hybrid approach to classifying incoming RDF, we will use as the resource template as a label or class for the existing RDF created in the three Sinopia environments; development, staging, and production."))},d=function(){return n.a.createElement("article",null,n.a.createElement("h2",null,"RDF Subjects-Predicates as a Matrix"),n.a.createElement("p",null,"The first approach we used was treating an incoming URI as a text string and then map each character in a row with it's position noted by the valid URL characters."),n.a.createElement("code",null,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;="),n.a.createElement("h3",null,"Example"),n.a.createElement("p",null,"To calculate a matrix for the ",n.a.createElement("code",null,"http://www.w3.org/1999/02/22-rdf-syntax-ns#type")," URI, one of the most common predicates, each character in the URI is assigned a position based on it's position in the valid URL list. A zero-padded vector of length 84 (the number of valid URL characters above) is created and the position of the character in the vector is assigned a value of 1."),n.a.createElement("table",{className:"primary"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Character"),n.a.createElement("th",null,"Position"),n.a.createElement("th",null,"Vector"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"h"),n.a.createElement("td",null,"33"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000100000000000000000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"t"),n.a.createElement("td",null,"45"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000100000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"t"),n.a.createElement("td",null,"45"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000100000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"p"),n.a.createElement("td",null,"41"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000001000000000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,":"),n.a.createElement("td",null,"66"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000000000000000100000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"/"),n.a.createElement("td",null,"67"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000000000000000010000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"/"),n.a.createElement("td",null,"67"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000000000000000010000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"w"),n.a.createElement("td",null,"48"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000100000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"w"),n.a.createElement("td",null,"48"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000100000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"w"),n.a.createElement("td",null,"48"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000100000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"."),n.a.createElement("td",null,"63"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000000000000100000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"w"),n.a.createElement("td",null,"48"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000100000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"3"),n.a.createElement("td",null,"55"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000010000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"."),n.a.createElement("td",null,"63"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000000000000000000000000100000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"o"),n.a.createElement("td",null,"40"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000010000000000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"r"),n.a.createElement("td",null,"43"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000000000000000010000000000000000000000000000000000000000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"g"),n.a.createElement("td",null,"32"),n.a.createElement("td",null,n.a.createElement("code",null,"000000000000000000000000000000001000000000000000000000000000000000000000000000000000"))))))},o=function(){return n.a.createElement("article",null,n.a.createElement("h2",null,"RDF Subjects-Predicates as a Hash Matrix"))};t.default=function(){return n.a.createElement(u.a,null,n.a.createElement(m.a,{title:"TensorFlow Data Models"}),n.a.createElement(r.a,{title:"TensorFlow Data Models"}),n.a.createElement(E,null),n.a.createElement(d,null),n.a.createElement(o,null),n.a.createElement(c.a,{backTo:"sinopia-challenge",backLabel:"Sinopia UI Challenge",nextTo:"model-training",nextLabel:"Training RDF Classification models"}))}}}]);
//# sourceMappingURL=component---src-pages-tf-data-models-js-8234e09485cf737a1a12.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@sanity/client");
var client = (0, client_1.createClient)({
    projectId: 'n86r1egh', 
    dataset: 'production',
    apiVersion: '2025-02-05', 
    useCdn: true, // Set to `true` to enable CDN for faster performance
});
exports.default = client;

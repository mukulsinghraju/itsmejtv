const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const streams = {

S1: "https://players.akamai.com/players/hlsjs?streamUrl=https%3A%2F%2Fdishmt.slivcdn.com%2Fhls%2Flive%2F2020591%2FTEN3HD%2Fhdntl%3Dexp%3D1785571630~acl%3D%2F*~id%3D3b35b572-ee31-4da1-a600-2421b52fdfca~data%3Dhdntl~hmac%3D96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238%2Fmaster_2000.m3u8",

S2: "https://domain.com/player2.html"

};

document.getElementById("playerFrame").src =
streams[id] || streams.S1;

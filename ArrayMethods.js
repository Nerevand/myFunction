//parametrs as array of strings
//for example ['1200', '222', '115555555555555555555555555551'].sumStrings();
Array.prototype.sumStrings=function(){const t=[],e=t=>"0"===t[0];return this.reduce((n,o)=>{if(n=n.toString().split(""),o=o.toString().split(""),n.length>o.length){let t=n.length-o.length;for(let e=0;e<t;e++)o.unshift("0")}else if(n.length<o.length){let t=o.length-n.length;for(let e=0;e<t;e++)n.unshift("0")}for(let e=n.length-1;e>=0;e--)t[e]=1*n[e]+1*o[e]+"";for(let e=t.length-1;e>=0;e--)1*t[e]>=10&&0!==e&&(t[e-1]=1*t[e-1]+1+"",t[e]=1*t[e]-10+"");for(;e(t);)t.shift();return t.join("")}),t.join("")}

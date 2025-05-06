let str = "  Hello, JavaScript World!  ";

console.log("Original string:", `"${str}"`);
console.log("Length:", str.length);
console.log("To Upper Case:", str.toUpperCase());
console.log("To Lower Case:", str.toLowerCase());
console.log("Trim:", str.trim());
console.log("Trim Start:", str.trimStart());
console.log("Trim End:", str.trimEnd());
console.log("Slice (7, 17):", str.slice(7, 17));
console.log("Substring (7, 17):", str.substring(7, 17));
console.log("Substr (7, 10):", str.substr(7, 10)); // deprecated but still works
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));
console.log("ReplaceAll 'l' with 'L':", str.replaceAll("l", "L"));
console.log("Includes 'JavaScript':", str.includes("JavaScript"));
console.log("Starts With '  Hello':", str.startsWith("  Hello"));
console.log("Ends With 'World!  ':", str.endsWith("World!  "));
console.log("Index Of 'JavaScript':", str.indexOf("JavaScript"));
console.log("Last Index Of 'l':", str.lastIndexOf("l"));
console.log("Char At (5):", str.charAt(5));
console.log("Char Code At (5):", str.charCodeAt(5));
console.log("Repeat 2 times:", str.repeat(2));
console.log("Split by space:", str.split(" "));
console.log("Concat with '!!!':", str.concat("!!!"));
console.log("Match 'Java':", str.match(/Java/));
console.log("Search 'Script':", str.search("Script"));

// document.getElementById()
console.log('base.js was loaded...')
console.log(typeof console.log);

function subtract (a, b) {
    // console.log(a - b)
    return a - b;
}

let count = 0;
console.log(subtract(1,2));

function generateNewFolderName (existingFolders) {
    // let count = false;
    // for (var i = 0; i < existingFolders.length; i++) {
    //     if(existingFolders[i] === 'New Folder') count = true;
    // }
    // if (count == false) {
    //     return "New Folder"
    // }
    
    if(existingFolders.some(function(value) {
        return value === 'New Folder';
    }) == false) {
        return "New Folder";
    }

    var numbers = [];

    for (var i = 0; i < existingFolders.length; i++) {
        // console.log(typeof existingFolders[i]);
        var slicedValue = parseInt(existingFolders[i].substr(existingFolders[i].length - 2, 1));
        
        if (Number.isInteger(slicedValue) == true) {
            numbers.push(slicedValue);
        }

    }  

    var maxValue = Math.max(...numbers) + 1;


     return 'New Folder (' + maxValue + ')';

    // count = 111;
    // return count;

}
// console.log(count);
// console.log(generateNewFolderName());
// console.log(count);
console.log(generateNewFolderName (["New Folder", "New Folder (3)", "New Folder (2)"]));



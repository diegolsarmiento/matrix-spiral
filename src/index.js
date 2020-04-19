function spiral(num){
    const results = [];
 
    for (let i = 0; i < num; i++) {
        results.push([]);
    }
 
    let counter = 1;
    let startColumn = 0;
    let endColumn = num - 1;
    let startRow = 0;
    let endRow = num - 1;
 
    while (startColumn <= endColumn && startRow <= endRow) {
 
     // Top Row
     for (let i = startColumn; i <= endColumn; i++) {
         results[startRow][i] = counter;
         counter++;
     }
     startRow++;
 
     // Right column
     for (let i = startRow; i <= endRow; i++) {
         results[i][endColumn] = counter;
         counter++;
     }
     endColumn--;
 
     // Bottom row
     for(let i = endColumn; i > startColumn; i--) {
         results[endRow][i] = counter;
         counter++;
     }
 
     endRow--;
 
     // Start column
     for(let i = endRow; i >= startRow; i--){
         results[i][startColumn] = counter;
         counter++;
     }
     startColumn++;
    }
    
    return results;
 }
   
   // Example:
   spiral(5);
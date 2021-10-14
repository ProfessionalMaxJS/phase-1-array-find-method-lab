function superbowlWin(record){
    function goodYear(element){
    return element.result ==="W";
    } 
    if (record.find(goodYear)){
    let W = record.find(goodYear);
    return W.year;
    }

   
}





// code your solution here//
const record =[{year:'2015',result:'W'},
    {year:'2014',result:'N/A'},
    {year:'2013',result:'L'},
]
function superbowlWin(record){
    const won =record.find(record => record.result === 'W');
    return won? won.year : undefined;
}
console.log(superbowlWin(record));
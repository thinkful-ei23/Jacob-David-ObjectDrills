function makeStudentsReport(data){
    return data.map(item => `${item.name}: ${item.grade}`);
}
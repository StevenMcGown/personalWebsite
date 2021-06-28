function queryDB() {
    fetch('https://9evudan1v4.execute-api.us-east-1.amazonaws.com/Prod/hello/').then(response => response.json())
    .then(data => console.log(data['Visitors']));
}
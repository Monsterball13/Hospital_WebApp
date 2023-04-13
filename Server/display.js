$(document).ready(() => {

    $.ajax({
        url: "http://localhost:5000/list", 
        method: 'GET',
        success: function(response){
            if(response.rows.length > 0){
                for(let index = 0; index < response.rows.length; index++) {
                    var newRow = $("<tr>");
                    var cols = "";
                    var name = '';
                    var date = '';
                    var age = '';
                    var gender = '';
                    var contact = '';
                    cols += '<td> '+ response.rows[index].name +'</td>';
                    cols += '<td> '+ response.rows[index].date +'</td>';
                    cols += '<td> '+ response.rows[index].age +'</td>';
                    cols += '<td> '+ response.rows[index].gender +'</td>';
                    cols += '<td> '+ response.rows[index].contact +'</td>';                
                    newRow.append(cols);
                    $("#tableData .tbody").append(newRow);
                }  
    
            }
        }
    })
    })
// Create a request.

var request = new XMLHttpRequest();

// Open a new connection with GET request on the URL endpoint.

// You can change the username section below with yours.
request.open('GET', 'https://api.github.com/users/Bgstatic/repos', true);

request.onload = function () {

    // Accessing JSON file.

    var data = JSON.parse(this.response);
    
    var statusHTML = '';
    
    // Get indicated information for projects.
    $.each(data, function(i,status){

      statusHTML += '<tr>';
      statusHTML += '<td>' + status.name + '</td>';
      if(status.description == null){

        statusHTML += '<td>' + "Cannot find project description" + '</td>';

      }else{

        statusHTML += '<td>' + status.description + '</td>';
      }
      
      statusHTML += "<td id=url_id><a href=" + status.html_url + " target = _blank>"+ status.html_url + "</a></td>";

      if(status.language == null){

        statusHTML += '<td>' + "Cannot find project language" + '</td>';

      }else{

        statusHTML += '<td>' + status.language + '</td>';
      }
      
      statusHTML += '</tr>';

    });

    $('tbody').html(statusHTML);
}

// Send request at the end.

request.send();

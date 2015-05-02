var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) alert('Mail sended!')
        else if(xmlhttp.status == 500) alert('Check apikey')
        else alert('Request error');
    }
}
xmlhttp.send(JSON.stringify({'key': 'qHbUt4i4VFnqlxYriZIWiw',
   'message': {
       'from_email': 'mail_from@write.here',
       'to': [{'email': 'mail_to@write.her', 'type': 'to'}],
       'autotext': 'true',
       'subject': 'Yeah!',
       'html': '<h1>Its work!</h1>'
    }}));
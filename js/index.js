const apiUrl = 'https://httpbin.org/post';

// Data to be sent in the POST request
const postData = {
  key1: 'value1',
  key2: 'value2'
};

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set up the request
xhr.open('POST', apiUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');

// Set up a callback function to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Successful response
    const responseData = JSON.parse(xhr.responseText);
    console.log('Response:', responseData);
  }
};

// Convert the postData object to a JSON string and send the request
xhr.send(JSON.stringify(postData));

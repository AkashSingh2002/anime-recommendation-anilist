// Define query as a template string
var query = `
query ($id: Int) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

// Define query variables
var variables = {
    id: 15125
};

// Define API config
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make API request
console.log('Sending Request:', { url, options });

fetch(url, options)
    .then(response => {
        console.log('Raw Response:', response);
        return response.json();
    })
    .then(data => {
        if (data.errors) {
            console.error('GraphQL Errors:', data.errors);
        } else {
            console.log('Data:', data);
        }
    })
    .catch(error => {
        console.error('Network or Server Error:', error);
    });

const sampleData ={

   events: [
    {
      id: '1',
      title: 'Trip to Empire State building',
      date: '2018-03-21',
      category: 'culture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'NY, USA',
      venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
      venueLatLng: {
        lat: 40.7484405,
        lng: -73.98566440000002
      },
      hostedBy: 'Bob',
      hostPhotoURL: '/assets/image/tyler.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: '/assets/image/tyler.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: '/assets/image/eric.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-18',
      category: 'drinks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
      hostedBy: 'Tom',
      hostPhotoURL: '/assets/image/eric.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: '/assets/image/eric.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: '/assets/image/tyler.jpg'
        }
      ]
    }
  ]

}


export default sampleData;
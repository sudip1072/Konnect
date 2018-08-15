import React, { Component } from 'react'
import { Grid,Button } from 'semantic-ui-react'
import cuid from 'cuid';
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'assets/image/tyler.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/image/tyler.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/image/eric.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'assets/image/eric.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/image/eric.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/image/tyler.jpg'
      }
    ]
  }
]


 class EventDashboard extends Component {
 
   
    state = {
      events:eventsDashboard,
      isOpen:false,
      selectedEvent:null
    }
    
   

  handleFormOpen = ()=> {
  this.setState({
  selectedEvent:null,  
  isOpen:true
  })
  }

  handleCancel = ()=> {
  this.setState({
    isOpen:false
  })
  }

  handleUpdatedEvent = (updatedEvent) =>{
   this.setState({
  events: this.state.events.map(event=>{
    if(event.id === updatedEvent.id){
      return Object.assign({},updatedEvent);
    } else{
      return event
    }
  }),
  isOpen:false,
  selectedEvent:null

   })
  }

  handleOpenEvent = (eventToOpen) =>()=>{
  this.setState({
    selectedEvent:eventToOpen,
    isOpen:true
  })

  }

  handleCreateEvent = (newEvent)=>{
  newEvent.id = cuid;
  newEvent.hostPhotoURL = '/assets/user.png';
  const updatedEvents = [...this.state.events, newEvent]
  this.setState({
    events:updatedEvents,
     isOpen:false
  })
  }

  handleDeleteEvent = (eventId) => () => {
  const updatedEvents = this.state.events.filter(e=> e.id !== eventId)
  this.setState({
    events:updatedEvents
  })
  }


  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
      <Grid.Column width={10}>
          <EventList deleteEvent ={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events = {this.state.events}/>
          </Grid.Column> 
          <Grid.Column width={6}>
          <Button onClick={ this.handleFormOpen} positive content='Create Event' />
          {this.state.isOpen && (
          <EventForm updateEvent ={this.handleUpdatedEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel = {this.handleCancel}/>
          )}
          </Grid.Column>  
      </Grid>
    )
  }
}

export default EventDashboard
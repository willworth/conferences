import React, { Component } from 'react';
import Listing from "./Listing"


class ConferenceList extends Component {
  constructor(props) {
    super(props)

this.state = {
  conferences: []
  // TODO: add shortlist array.  perhaps simpler as a bool?
  }
};

componentWillMount () {
  fetch ("http://localhost:8080/conferences")
  .then(conferences =>{
      return conferences.json(); 
  }).then(data => {
      let conferences = data.conferences.map((conf) =>{
          return(
              <Listing 
              key={conf.title}
               title= {conf.title}
                location= {conf.location}
                 url={conf.url}
                 byline={conf.byline} />
             
              
              )
          
      })
      this.setState({conferences:conferences});
      console.log('state', this.state.conferences);
  })
}





  render() {
    return (
      <div className="ConferenceList">
        <p>This is the ConferenceList Component</p>
        {this.state.conferences}
      </div>
    );
  }
}

export default ConferenceList;
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

const list = [
{
title: 'React',
url: 'https://facebook.github.io/react/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://github.com/reactjs/redux',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];




class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  list,
searchTerm: '',

  };
  this.onDismiss = this.onDismiss.bind(this);
  this.onSearchChange = this.onSearchChange.bind(this);

  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });


}
isSearched(searchTerm) {
return function(item) {
return item.title.toLowerCase().includes(searchTerm.toLowerCase());
}
}

onSearchChange(event) {
this.setState({ searchTerm: event.target.value });
console.log(event.target.value);
 isSearched(event.target.value);

}


render() {
return (
<div className="App">
{this.state.list.map(item => {
const onHandleDismiss = () =>
this.onDismiss(item.objectID);

return (

<div key={item.objectID}>
<span>
<form>
<input type="text" onChange={this.onSearchChange}/>
</form>
{this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>

<span><a href={item.url}>{item.title}</a>
<span>{item.author}</span>
<span>{item.num_comments}</span>
{item.points}</span>

<button
onClick={onHandleDismiss}
type="button"
>
Dismiss
</button>
</span>
</div>
);
}
))
}
</div>
);
}}
export default App

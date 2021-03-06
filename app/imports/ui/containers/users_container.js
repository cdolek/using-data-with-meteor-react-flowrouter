import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout }  from '../layouts/app_layout'

//here we are creating a data container
export default createContainer(() => {

	//Our only reactive data source here is Meteor.user(), which returns null if no user is signed in, and the user object if they are.

  return {
    isLoggedIn: Meteor.user() !== null,
    foo: "bar"
  }

//As the second argument, we pass in the sub-component that will have access to this data 
}, AppLayout)

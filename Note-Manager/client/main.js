import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import './main.html';




Template.body.helpers({

  notes(){
    return Notes.find({});
  }
});

Template.add.events({
  'submit .add-form' : function(){
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

     Meteor.call('notes.insert', text);
    

    target.text.value = '';
    $('.modal').modal('close');

    //return false;
  }
});

Template.note.events({
  'click .delete-note' : function (param) { 
    // Notes.remove(this._id);
    Meteor.call('notes.remove', this)
   //return false;
   }
});

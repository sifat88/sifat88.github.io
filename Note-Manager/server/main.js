
import { Meteor } from 'meteor/meteor';
import { Notes } from '../lib/collections.js';

Meteor.startup(() => {
    Meteor.methods({
        'notes.insert': function (text) {
            //check(text , String);
            if(!Meteor.userId()){
                throw new Meteor.Error('Sorry!');
            }
            Notes.insert({
                text : text,
                createdAt: new Date(),
                owner : Meteor.userId(),
                username : Meteor.user().username
              });
        },
        'notes.remove': function (note){
            //check(note._id, String);
            if(note.owner !== Meteor.userId()){
                //throw new Meteor.Error('Sorry! You are not the owner');
                window.alert('Sorry! You are not the owner');
            }
            Notes.remove(note._id);
        }
    });
});
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

// Create Meteor app
Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});
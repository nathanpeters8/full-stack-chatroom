import consumer from "./consumer"

import $ from 'jquery';

import {
  indexTasks,
} from "../lib/requests.js";

consumer.subscriptions.create("TaskChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat channel!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from the chat channel!");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);

    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {
        return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
          " + task.content + "\
          </div>";
      });

      $("#tasks").html(htmlString);
    });
  }
});

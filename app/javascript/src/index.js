import $ from 'jquery';

import {
  indexChats,
  postChat,
} from "../lib/requests.js";

$(document).ready(function () {
  indexChats(function (response) {
    var htmlString = response.chats.map(function(chat) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + chat.id + "'> \
        " + chat.message + "\
        </div>";
    });

    $("#chats").html(htmlString);
  });

  $("#new-chat-form").on("submit", function (event) {
    event.preventDefault();

    var content = $("#chat-value").val();

    console.log("content", content);

    postChat(content);
  });
});
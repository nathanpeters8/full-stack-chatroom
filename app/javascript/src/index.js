import $ from 'jquery';

import {
  indexChats,
  postChat,
} from "../lib/requests.js";

$(document).ready(function () {
  indexChats(function (response) {
    var htmlString = response.chats.map(function(chat) {
      return `
        <li class="py-4">
          <div class="flex space-x-3">
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium">${chat.name}</h3>
                <p class="text-sm text-gray-500">${chat.ago}</p>
              </div>
              <p class="text-sm text-gray-500">${chat.message}</p>
            </div>
          </div>
        </li>
      `;
    });

    $("#chats").html(htmlString);
  });

  $("#new-chat-form").on("submit", function (event) {
    event.preventDefault();

    var message = $("#chat-message").val();
    var name = $("#chat-name").val();

    postChat(message, name);

    $("#chat-message").val("");
  });
});
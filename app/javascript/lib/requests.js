import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexChats = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/chats',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postChat = function (message, name, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/chats',
    data: {
      chat: {
        message: message,
        name: name,
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

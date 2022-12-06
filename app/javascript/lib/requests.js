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

export var postChat = function (message, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/chats',
    data: {
      chat: {
        message: message
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

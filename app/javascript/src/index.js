import $ from 'jquery';

import {
  indexTasks,
  postTask,
} from "../lib/requests.js";

$(document).ready(function () {
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
        " + task.content + "\
        </div>";
    });

    $("#tasks").html(htmlString);
  });

  $("#new-task-form").on("submit", function (event) {
    event.preventDefault();

    var content = $("#task-value").val();

    console.log("content", content);

    postTask(content);
  });
});
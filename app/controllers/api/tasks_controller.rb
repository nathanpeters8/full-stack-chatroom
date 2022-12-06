module Api
  class TasksController < ApplicationController
    def index
      @tasks = Task.order(created_at: :desc)
      render 'index', status: :ok
    end

    def create
      @task = Task.new(task_params)

      return render 'bad_request', status: :bad_request unless @task.save

      render 'show', status: :ok
    end

    private

    def task_params
      params.require(:task).permit(:content, :due)
    end
  end
end

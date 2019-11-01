const pendingTaskScreen = new function() {
    this.show = function() {
        render('.mainContainer .tasks', pendingTask, {})
    }
}
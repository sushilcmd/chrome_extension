const newTaskScreen = new function() {
    this.show = function() {
        render('.mainContainer .tasks', newTask, {})
    }
}
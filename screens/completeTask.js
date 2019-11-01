const completedTaskScreen = new function() {
    this.show = function() {
        render('.mainContainer .tasks', completedTask, {})
    }
}
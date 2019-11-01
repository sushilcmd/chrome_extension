$(document).ready(function() {
    makeTemplates();
    layoutScreen.show();
});


const layoutScreen = new function() {
    this.show = function() {
        render('.mainContainer', layout, {}, function() {
            pendingTaskScreen.show();
        })
    }
}
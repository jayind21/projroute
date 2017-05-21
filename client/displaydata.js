/**
* Templates
*/

Meteor.subscribe('Messages');

Template.data2015.helpers({
    messages: function() {
        return Messages.find({active_date: {
        $gte: new Date("2015-01-01T00:00:00.000Z"),
        $lt: new Date("2016-01-01T00:00:00.000Z")
    }}, { sort: { time: -1}});
    }
});

Template.data2016.helpers({
    messages: function() {
        return Messages.find({active_date: {
        $gte: new Date("2016-01-01T00:00:00.000Z"),
        $lt: new Date("2017-01-01T00:00:00.000Z")
    }}, { sort: { time: -1}});
    }
})
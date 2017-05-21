/**
* Models
*/
RecordsList = new Meteor.Collection('Records');

RecordSchema = new SimpleSchema({
   
   active:{
   type: String,
   label:"Status",
   },
   active_date:{
   type: Date,
   label:"Active Date",
   },
   expiry_date:{
   type: Date,
   label:"Expiry Date",
   }
});
RecordsList.attachSchema(RecordSchema);

Meteor.startup(function(){
RecordsList.remove({});
InsertNewRecords2016();  
InsertNewRecords2015();

});

if (Meteor.isServer)
{
Meteor.publish('RecordsList',function(){
	return RecordsList.find();
});

};


function InsertNewRecords2016 (){
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 03 2016"), expiry_date: new Date("Mar 06 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 05 2016"), expiry_date: new Date("Mar 08 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 07 2016"), expiry_date: new Date("Mar 10 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2016"), expiry_date: new Date("Mar 12 2016") });
   
}

function InsertNewRecords2015 (){
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2015"), expiry_date: new Date("Mar 12 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2015"), expiry_date: new Date("Mar 12 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2015"), expiry_date: new Date("Mar 12 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2015"), expiry_date: new Date("Mar 12 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 09 2015"), expiry_date: new Date("Mar 12 2015") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 04 2015"), expiry_date: new Date("Mar 06 2015") });
   RecordsList.insert({ active: "n", active_date: new Date("Mar 04 2015"), expiry_date: new Date("Mar 06 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 04 2015"), expiry_date: new Date("Mar 06 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 04 2015"), expiry_date: new Date("Mar 06 2015") });
   RecordsList.insert({ active: "y", active_date: new Date("Mar 04 2015"), expiry_date: new Date("Mar 06 2015") });
}
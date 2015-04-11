// Generated by LiveScript 1.3.1
(function(){
  var db, Schema, HomeworkSchema;
  db = require('./db');
  Schema = db.mongoose.Schema;
  HomeworkSchema = new Schema({
    requirementId: String,
    requirementName: String,
    studentUsr: String,
    studentName: String,
    extend: String,
    date: {
      type: Date,
      'default': Date.now
    },
    score: {
      type: Number,
      'default': -1
    }
  });
  HomeworkSchema.virtual('scorestring').get(function(){
    if (this.score >= 0) {
      return this.score;
    } else {
      return '尚未评分';
    }
  });
  HomeworkSchema.virtual('path').get(function(){
    return './dist/uploads/' + this.requirementName + this.requirementId + '/' + this.studentName + this.studentUsr + '.' + this.extend;
  });
  HomeworkSchema.virtual('name').get(function(){
    return this.studentName + this.studentUsr + '.' + this.extend;
  });
  HomeworkSchema.virtual('datestring').get(function(){
    var month, date, hour, minute;
    month = this.date.getMonth() + 1 >= 10
      ? '' + (this.date.getMonth() + 1)
      : '0' + (this.date.getMonth() + 1);
    date = this.date.getDate() >= 10
      ? '' + this.date.getDate()
      : '0' + this.date.getDate();
    hour = this.date.getHours() >= 10
      ? '' + this.date.getHours()
      : '0' + this.date.getHours();
    minute = this.date.getMinutes() >= 10
      ? '' + this.date.getMinutes()
      : '0' + this.date.getMinutes();
    return this.date.getFullYear() + '/' + month + '/' + date + ' ' + hour + ':' + minute;
  });
  module.exports = db.mongoose.model('Homework', HomeworkSchema);
}).call(this);

function Store(initial_data) {
  this.data = initial_data || [];
  this.len = this.data.length;
}

Store.prototype.addSearch = function(search, time) {
  this.data.push({"search" : search, "when" : time});
}

Store.prototype.getInfo = function() {
    return this.data;
}

module.exports = Store;
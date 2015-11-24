var sanitize = function sanitize(record) {
    var spaces = Array.prototype.slice.call(arguments, 1);
    return spaces.reduce(function (r, space) {
        return (function () {
            r[space] ? void 0 : r[space] = {};
            return r[space];
        })();
    }, record);
};
var readFile = function readFile(fs, Task) {
    return function (path) {
        return Task.asyncFunction(function (callback) {
            return fs.readFile(path, 'utf8', function (err, data) {
                return callback(err ? Task.fail(err) : Task.succeed(data));
            });
        });
    };
};
var make = function make(localRuntime) {
    return function () {
        var fsø1 = require('fs');
        var Taskø1 = Elm.Native.Task.make(localRuntime);
        return (function () {
            sanitize(localRuntime, 'Native', 'FS');
            return function () {
                var vø1 = localRuntime.Native.FS.values;
                return vø1 ? vø1 : localRuntime.Native.FS.values = { 'readFile': readFile(fsø1, Taskø1) };
            }.call(this);
        })();
    }.call(this);
};
sanitize(Elm, 'Native', 'FS');
Elm.Native.FS.make = make;
typeof(window) == 'undefined' ? window = global : void 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbInNhbml0aXplIiwicmVjb3JkIiwic3BhY2VzIiwicmVkdWNlIiwiciIsInNwYWNlIiwicmVhZEZpbGUiLCJmcyIsIlRhc2siLCJwYXRoIiwiYXN5bmNGdW5jdGlvbiIsImNhbGxiYWNrIiwiZXJyIiwiZGF0YSIsImZhaWwiLCJzdWNjZWVkIiwibWFrZSIsImxvY2FsUnVudGltZSIsImZzw7gxIiwicmVxdWlyZSIsIlRhc2vDuDEiLCJFbG0iLCJOYXRpdmUuVGFzay5tYWtlIiwidsO4MSIsIk5hdGl2ZS5GUy52YWx1ZXMiLCJOYXRpdmUuRlMubWFrZSIsInR5cGVvZiIsIndpbmRvdyIsImdsb2JhbCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBT0EsUUFBQSxHQUFQLFNBQU9BLFFBQVAsQ0FDR0MsTUFESCxFO1FBQ1lDLE1BQUEsRztJQUNWLE9BQUNBLE1BQUEsQ0FBT0MsTUFBUixDQUFlLFVBQUtDLENBQUwsRUFBT0MsS0FBUCxFQUFjO0FBQUEsZSxhQUMzQjtBQUFBLFlBQVVELENBQU4sQ0FBUUMsS0FBUixDQUFKLEcsTUFBQSxHQUFtQ0QsQ0FBTixDQUFRQyxLQUFSLENBQU4sR0FBcUIsRUFBNUM7QUFBQSxZQUNBLE9BQU1ELENBQU4sQ0FBUUMsS0FBUixFQURBO0FBQUEsUyxDQUFBLEVBRDJCO0FBQUEsS0FBN0IsRUFHQUosTUFIQSxFO0NBRkY7QUFPQSxJQUFPSyxRQUFBLEdBQVAsU0FBT0EsUUFBUCxDQUNHQyxFQURILEVBQ01DLElBRE4sRUFFRTtBQUFBLHFCQUFLQyxJQUFMLEVBQVc7QUFBQSxlQUFnQkQsSUFBZixDQUFDRSxhQUFGLENBQXFCLFVBQUtDLFFBQUwsRUFDOUI7QUFBQSxtQkFBV0osRUFBVixDQUFDRCxRQUFGLENBQWNHLElBQWQsRSxNQUFBLEVBQXlCLFVBQUtHLEdBQUwsRUFBVUMsSUFBVixFQUN2QjtBQUFBLHVCQUFDRixRQUFELENBQ01DLEdBQUosR0FDR0osSUFBQSxDQUFLTSxJQUFOLENBQVdGLEdBQVgsQ0FERixHQUVHSixJQUFBLENBQUtPLE9BQU4sQ0FBY0YsSUFBZCxDQUhKO0FBQUEsYUFERjtBQUFBLFNBRFM7QUFBQSxLQUFYO0FBQUEsQ0FGRixDQVBBO0FBZ0JBLElBQU9HLElBQUEsR0FBUCxTQUFPQSxJQUFQLENBQ0dDLFlBREgsRUFDaUI7QUFBQSxXLFlBQ2Q7QUFBQSxZQUFBQyxJLEdBQUlDLE9BQUQsQ0FBUyxJQUFULENBQUg7QUFBQSxRQUNBLElBQUFDLE0sR0FBTUMsR0FBQSxDQUFJQyxnQkFBTCxDQUFzQkwsWUFBdEIsQ0FBTCxDQURBO0FBQUEsUUFFRCxPLGFBQUk7QUFBQSxZQUFDakIsUUFBRCxDQUFVaUIsWUFBVixFLFFBQUEsRSxJQUFBO0FBQUEsWUFDRixPLFlBQU07QUFBQSxvQkFBQU0sRyxHQUFFTixZQUFBLENBQWFPLGdCQUFmO0FBQUEsZ0JBQ0osT0FBSUQsR0FBSixHQUFNQSxHQUFOLEdBQWNOLFlBQUEsQ0FBYU8sZ0JBQW5CLEdBQW9DLEUsWUFDL0JsQixRQUFELENBQVVZLElBQVYsRUFBYUUsTUFBYixDQURnQyxFQUE1QyxDQURJO0FBQUEsYSxLQUFOLEMsSUFBQSxFQURFO0FBQUEsUyxDQUFBLEVBQUosQ0FGQztBQUFBLEssS0FEYyxDLElBQUE7QUFBQSxDQURqQixDQWhCQTtBQXlCQ3BCLFFBQUQsQ0FBVXFCLEdBQVYsRSxRQUFBLEUsSUFBQSxFQXpCQTtBQTBCTUEsR0FBQSxDQUFJSSxjQUFWLEdBQXlCVCxJQUF6QixDQTFCQTtBQTRCU1UsTUFBRCxDQUFRQyxNQUFSLENBQUosSSxXQUFKLEdBQTBDQSxNQUFOLEdBQWFDLE1BQWpELEcsTUFBQSIsInNvdXJjZXNDb250ZW50IjpbIihkZWZuLSBzYW5pdGl6ZVxuICBbcmVjb3JkICYgc3BhY2VzXVxuICAoc3BhY2VzLnJlZHVjZSAoZm4gW3Igc3BhY2VdIChkb1xuICAgIChpZiAoYWdldCByIHNwYWNlKSBuaWwgKHNldCEgKGFnZXQgciBzcGFjZSkge30pKVxuICAgIChhZ2V0IHIgc3BhY2UpKSlcbiAgcmVjb3JkKSlcblxuKGRlZm4tIHJlYWRGaWxlXG4gIFtmcyBUYXNrXVxuICAoZm4gW3BhdGhdICguYXN5bmNGdW5jdGlvbiBUYXNrIChmbiBbY2FsbGJhY2tdXG4gICAgKC5yZWFkRmlsZSBmcyBwYXRoIDp1dGY4IChmbiBbZXJyLCBkYXRhXVxuICAgICAgKGNhbGxiYWNrXG4gICAgICAgIChpZiBlcnJcbiAgICAgICAgICAoVGFzay5mYWlsIGVycilcbiAgICAgICAgICAoVGFzay5zdWNjZWVkIGRhdGEpKSkpKSkpKSlcblxuKGRlZm4tIG1ha2VcbiAgW2xvY2FsUnVudGltZV0gKGxldFxuICBbZnMgKHJlcXVpcmUgXCJmc1wiKVxuICAgVGFzayAoRWxtLk5hdGl2ZS5UYXNrLm1ha2UgbG9jYWxSdW50aW1lKV1cbiAgKGRvIChzYW5pdGl6ZSBsb2NhbFJ1bnRpbWUgOk5hdGl2ZSA6RlMpXG4gICAgKGxldCBbdiBsb2NhbFJ1bnRpbWUuTmF0aXZlLkZTLnZhbHVlc11cbiAgICAgIChpZiB2IHYgKHNldCEgbG9jYWxSdW50aW1lLk5hdGl2ZS5GUy52YWx1ZXMge1xuICAgICAgICA6cmVhZEZpbGUgKHJlYWRGaWxlIGZzIFRhc2spfSkpKSkpKVxuXG4oc2FuaXRpemUgRWxtIDpOYXRpdmUgOkZTKVxuKHNldCEgRWxtLk5hdGl2ZS5GUy5tYWtlIG1ha2UpXG5cbihpZiAoPT0gKHR5cGVvZiB3aW5kb3cpIDp1bmRlZmluZWQpIChzZXQhIHdpbmRvdyBnbG9iYWwpKVxuIl19

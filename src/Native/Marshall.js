var sanitize = function sanitize(record) {
    var spaces = Array.prototype.slice.call(arguments, 1);
    return spaces.reduce(function (r, space) {
        return (function () {
            r[space] ? void 0 : r[space] = {};
            return r[space];
        })();
    }, record);
};
var make = function make(localRuntime) {
    return (function () {
        sanitize(localRuntime, 'Native', 'Marshall');
        return localRuntime.Native.Marshall.values ? localRuntime.Native.Marshall.values : localRuntime.Native.Marshall.values = { 'unsafeNull': null };
    })();
};
sanitize(Elm, 'Native', 'Marshall');
Elm.Native.Marshall.make = make;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbInNhbml0aXplIiwicmVjb3JkIiwic3BhY2VzIiwicmVkdWNlIiwiciIsInNwYWNlIiwibWFrZSIsImxvY2FsUnVudGltZSIsIk5hdGl2ZS5NYXJzaGFsbC52YWx1ZXMiLCJudWxsIiwiRWxtIiwiTmF0aXZlLk1hcnNoYWxsLm1ha2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU9BLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBQWlCQyxNQUFqQixFO1FBQTBCQyxNQUFBLEc7SUFDeEIsT0FBQ0EsTUFBQSxDQUFPQyxNQUFSLENBQWUsVUFBS0MsQ0FBTCxFQUFPQyxLQUFQLEVBQWM7QUFBQSxlLGFBQzNCO0FBQUEsWUFBVUQsQ0FBTixDQUFRQyxLQUFSLENBQUosRyxNQUFBLEdBQW1DRCxDQUFOLENBQVFDLEtBQVIsQ0FBTixHQUFxQixFQUE1QztBQUFBLFlBQ0EsT0FBTUQsQ0FBTixDQUFRQyxLQUFSLEVBREE7QUFBQSxTLENBQUEsRUFEMkI7QUFBQSxLQUE3QixFQUdBSixNQUhBLEU7Q0FERjtBQU1BLElBQU9LLElBQUEsR0FBUCxTQUFPQSxJQUFQLENBQ0dDLFlBREgsRUFFRTtBQUFBLFcsYUFDRTtBQUFBLFFBQUNQLFFBQUQsQ0FBVU8sWUFBVixFLFFBQUEsRSxVQUFBO0FBQUEsUUFDQSxPQUFJQSxZQUFBLENBQWFDLHNCQUFqQixHQUNJRCxZQUFBLENBQWFDLHNCQURqQixHQUVVRCxZQUFBLENBQWFDLHNCQUFuQixHQUEwQyxFLGNBQzVCQyxJQUQ0QixFQUY5QyxDQURBO0FBQUEsSyxDQUFBLEVBREY7QUFBQSxDQUZGLENBTkE7QUFlQ1QsUUFBRCxDQUFVVSxHQUFWLEUsUUFBQSxFLFVBQUEsRUFmQTtBQWdCTUEsR0FBQSxDQUFJQyxvQkFBVixHQUErQkwsSUFBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIoZGVmbi0gc2FuaXRpemUgW3JlY29yZCAmIHNwYWNlc11cbiAgKHNwYWNlcy5yZWR1Y2UgKGZuIFtyIHNwYWNlXSAoZG9cbiAgICAoaWYgKGFnZXQgciBzcGFjZSkgbmlsIChzZXQhIChhZ2V0IHIgc3BhY2UpIHt9KSlcbiAgICAoYWdldCByIHNwYWNlKSkpXG4gIHJlY29yZCkpXG5cbihkZWZuLSBtYWtlXG4gIFtsb2NhbFJ1bnRpbWVdXG4gIChkb1xuICAgIChzYW5pdGl6ZSBsb2NhbFJ1bnRpbWUgOk5hdGl2ZSA6TWFyc2hhbGwpXG4gICAgKGlmIGxvY2FsUnVudGltZS5OYXRpdmUuTWFyc2hhbGwudmFsdWVzXG4gICAgICAgIGxvY2FsUnVudGltZS5OYXRpdmUuTWFyc2hhbGwudmFsdWVzXG4gICAgICAgIChzZXQhIGxvY2FsUnVudGltZS5OYXRpdmUuTWFyc2hhbGwudmFsdWVzIHtcbiAgICAgICAgICA6dW5zYWZlTnVsbCBudWxsIH0pKSkpXG5cbihzYW5pdGl6ZSBFbG0gOk5hdGl2ZSA6TWFyc2hhbGwpXG4oc2V0ISBFbG0uTmF0aXZlLk1hcnNoYWxsLm1ha2UgbWFrZSlcbiJdfQ==

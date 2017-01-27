function forEach(hidden, show) {
  for (var i = 0; i < hidden.length; i++) {
    show(hidden[i]); 
  }
}
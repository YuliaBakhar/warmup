module.exports = function warmup(temperature) {
  temperature = 1.8 * temperature  + 32;
  return temperature; 
};

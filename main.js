console.log("Hello main.js");

// Solution 1

/*
var operators = ['+','-','*','/']
var a = 1
var b = 0
var iOperator = 0
$('button.operator').click(function(){
  iOperator = (iOperator+1)%4
  $('button.operator').text(operators[iOperator])
  renderResult()
})
$('button.a').click(function() {
  a++
  $('.a').text(a)
  renderResult()
})
$('button.b').click(function() {
  b++
  $('.b').text(b)
  renderResult()
})

function renderResult() {
  $('.result').text(eval(a+operators[iOperator]+b))
}
*/

// Solution 2
var operators = ['+','-','*','/']
var a = 6
var b = 7
var iOperator = 2

render()

$('button.operator').click(function(){
  iOperator = (iOperator+1)%4
  render()
})
$('button.a').click(function() {
  a++
  render()
})
$('button.b').click(function() {
  b++
  render()
})

function render() {
  $('button.operator').text(operators[iOperator])
  $('.a').text(a)
  $('.b').text(b)
  $('.result').text(eval(a+operators[iOperator]+b))
}
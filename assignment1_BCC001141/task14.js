var a = 2;
document.write("a is " + a + ".<br>");

var b = 1;
document.write("b is " + b + ".<br>");

var result = (--a) - (--b) + (++b) + (b--);
document.write("result is " + result + ".<br><br><br>");


//re-initialize & explain
a = 2;
b = 1;
result = --a;
document.write("<b>--a</b> gives <b>" + result + "</b> because it decrement 'a' first and than compute the experssion.<br>");
result = result - (--b);
document.write("<b>--a - --b</b> gives <b>" + result + "</b> because it decrement 'b' first (thus making it 0) and when subtracted from --a i.e. 1-(0) is 1.<br>");
result = result + ++b;
document.write("<b>--a - --b + ++b</b> gives <b>" + result + "</b> because '++b' increments 'b' first and it makes 'b' equals 1 and the addition yields 1+1=2 .<br>");
result = result + b--;
document.write("<b>--a - --b + ++b + b--</b> gives <b>" + result + "</b> because it decrements 'b' after calculating the expression.<br>");





document.write("<br><br><br>");
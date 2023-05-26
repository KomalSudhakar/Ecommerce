<html>

<body>
<script>
function f1(a,b,c){
  if (a==undefined){
    a=10;
  }
  if (b==undefined){
    b=20;
  } if (c==undefined){
    c=30;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}
f1(90);
function f2(a=1,b=2,c=3){
  console.log(a);
  console.log(b);
  console.log(c);
}
f2();
</script>
</body>

</html>

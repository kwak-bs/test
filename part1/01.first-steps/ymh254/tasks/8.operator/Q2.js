//할당 후 결과 예측
let a = 2;
let x = 1 + (a *= 2);
// a: 4, x = 5

//우선 순위가 높은 순서대로 계산
//우선 순위: +(단항덧셈) "=" -(단항 부정) ">" ** ">" * "=" / ">" + "=" - ">" = ">" ,

//쉼표 연산자
let a = (1 + 2, 3 + 4);
// a: 7 (1+2의 결과 값은 버려짐)
// a = 1 + 2, 3 + 4 의 경우에 쉼표 연산자의 운선순위가 낮기 때문에 a: 3
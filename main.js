//1

// function Proverka(a, b) 
// {
//     if (a % 2 == 0 && b % 2 == 0) 
//     {
//         return a * b;
//     }
//     else if (a & 2 != 0 && b % 2 != 0) 
//     {
//         return a + b;
//     }
//     else 
//     {
//         if (a % 2 != 0) 
//         {
//             return a;
//         }
//         else 
//         {
//             return b;
//         }
//     }
// }

// document.write(Proverka(4, 2) + "<br>"); //result = 8
// document.write(Proverka(5, 6) + "<br>"); //result = 5
// document.write(Proverka(3, 7) + "<br>"); //result = 10

//2

// function Rect(aX, aY, bX, bY, cX, cY, dX, dY) 
// {
//     if (aY == bY && cY == dY && aX == dX && bX == cX) 
//     {
//         document.write("YES! Points form a rectangle " + "<br>");
//     }
//     else 
//     {
//         document.write("NO! Points DON'T form a rectangle " + "<br>");
//     }
// }
// Rect(2, 4, 5, 4, 5, 1, 2, 1); // result = YES
// Rect(7, 1, 4, 6, 2, 9, 3, 8); // result = NO 
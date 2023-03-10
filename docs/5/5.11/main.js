const result = document.getElementById('result')

result.innerHTML +=
  `\tПлоща паралелограма побудованого на двух векторах \`vec a\` та \`vec b\`, дорівнює \`abs([a ** b])\`:\n
   \t\t\`vec a ** vec b = (vec p + 2vec q) ** (3vec p - vec q) = 
   3(vec p ** vec p) - (vec p ** vec q) + 6(vec q ** vec p) - 2(vec q ** vec q) = 
   3 * 0 + (vec q ** vec p) + 6(vec q ** vec p) - 2 * 0 = 7(vec q ** vec p)\`
   \t\t\`S = abs(vec a ** vec b) = abs(7(vec q ** vec p)) = 7 * abs(vec q) * abs(vec p) * sin(pi/6) 
   = 7 * 2 * 1 * 1/2 = 7\``
# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquí el razonamiento al puzzle_
Para conocer las formas diferentes de subir las escaleras, tome encuenta que lo principal es saber con cuantos escalones se inicia en este caso se puede iniciar con 1 escalon o 2, para restarlo al N número de escaleras y así saber cuantos peldaños quedan para el proximo paso.
* Con 1 Peldaño solo hay 1 forma de subir
* Con 2 Peldaños puede dar dos pasos (1,1), o subir dos de un paso (2), siendo 2 Formas posibles 
* Con 3 Peldaños es donde considero el primer paso, si es 1 quedan dos restantes y sabemos que para dos escalones hay 2 formas posibles de subirlos, de lo contrario, si inicia en 2 pasos queda 1 escalon y solo una forma de subirlo y esto da que "1+2=3" formas de subir 3 escalones. 
* con 4 Peldaños de igual forma se considera el primer paso, si se comienza en 1 restan 3 y ya se conoce de cuantas formas posibles se suben 3 siendo estas 3, si se suben 2 restan 2 y sabemos que hay 2 formas posibles de subir dos peldaños y esto queda de la siguiente forma; "2+3=5", siendo 5 formas posibles de subir 4 Peldaños. 

De esta forma se sabe que al subir 5, se repite lo del paso anterior, saber cuantos peldaños quedan una vez si se suben 1 o dos en un principio y así susesibamente con N peldaños, con lo cual se suma las formas posibles del numero de peldaños alteriores siendo los del 3 y 4 dando como resultado "3+5=8", siendo 8 formas posibles de subir 5, y asi si son 6 peldaños pasa exactamente lo mismo, se suman los dos anteriores (4 y 5 "5+8=13") y así susesivamente. 
Todo esto se parece a la serie Fibonacci lo que hace que se resuelva más facil. 

Teniendo todo lo anterior contemplado, en programación, se resume en iterar por Número de Peldaños, sumando las formas posibles, siguiendo la serie Fibonacci hasta el número de peldaños ingresados por el usuario y así devolver el resultado (el numero de formas de subir). 

1 = 1
2 = 2
3 = 1+2 = 3
4 = 2+3 = 5
5 = 3+5 = 8
6 = 5+8 = 13 
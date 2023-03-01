from sympy import solve, Symbol

x = Symbol('x')

print(solve(x**2 - (1 + 2j)*x + 1 + 7j)) # [-1.0 + 3.0*I, 2.0 - 1.0*I]
print(solve(x**2 - (3 - 2j)*x + (5 - 5j))) # [1.0 - 3.0*I, 2.0 + 1.0*I]
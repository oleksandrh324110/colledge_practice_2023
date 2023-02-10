import numpy as np

x = (1, 2, 3, 4, 5, 6)
y = (5, 6, -27, -4, -12)

res = np.polydiv(x, y) 

print(res) # (array([1., 0.]), array([3., 3., 2., 1.]))
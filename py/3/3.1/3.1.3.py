import numpy as np

x = (1, 0, 1, 0, 0, 1)
y = (1, 0, -2, -3, -2)

res = np.polydiv(x, y) 

print(res) # (array([1., 0.]), array([3., 3., 2., 1.]))
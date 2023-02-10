import numpy as np

x = (-12, 4, -3, 4, 8, 0, -1)
y = (1, 0, 1)

res = np.polydiv(x, y) 

print(res) # (array([-12.,   4.,   9.,   0.,  -1.]), array([0.]))
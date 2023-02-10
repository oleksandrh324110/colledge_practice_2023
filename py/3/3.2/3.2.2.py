import numpy as np

x = (2, 1, -5, -1, 1)
y = (1, -1, 0)

res = np.polydiv(x, y) 

print(res) # (array([ 2.,  3., -2.]), array([-3.,  1.]))
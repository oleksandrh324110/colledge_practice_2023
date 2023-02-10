import numpy as np

x = (1, 0, -1, 2)
y = (1, 0, 1)

res = np.polydiv(x, y) 

print(res) # (array([1., 0.]), array([-2.,  2.]))
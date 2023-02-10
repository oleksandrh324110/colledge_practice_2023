import numpy as np

x = (1, 1, 1, 1, 1, 1)
y = (5, 14, -5, -8, -6)

res = np.polydiv(x, y) 

print(res) # (array([ 0.2 , -0.36]), array([ 7.04,  0.8 , -0.68, -1.16]))
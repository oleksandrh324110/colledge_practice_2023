import numpy as np

x = (1, 0, 0, 0, 0, 0)
y = (3, 4, -3, 0, -4)

res = np.polydiv(x, y) 

print(res) # (array([ 0.33333333, -0.44444444]), array([ 2.77777778, -1.33333333,  1.33333333, -1.77777778]))
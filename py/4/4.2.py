import numpy as np

# 4.2.1
z1 = 2 * (np.cos(np.pi/3)+1j*np.sin(np.pi/3))
z2 = 5 * (np.cos(-np.pi/4)+1j*np.sin(-np.pi/4))

print(z1 * z2) # (9.659258262890685+2.5881904510252065j)

# 4.2.2
z1 = 2 * (np.cos(np.pi/6)+1j*np.sin(np.pi/6))
z2 = 3 * (np.cos(np.pi/12)+1j*np.sin(np.pi/12))

print(z1 / z2) # (0.6439505508593788+0.17254603006834715j)
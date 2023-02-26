import numpy as np
import cmath

# 4.4.1
z = 1j * np.sin((23/24)*np.pi)
print(np.abs(z), cmath.phase(z)) # 0.13052619222005157 1.5707963267948966

# 4.4.2
z = np.sin(np.pi/5)+1j*np.cos(np.pi/5)
print(np.abs(z), cmath.phase(z)) # 1.0 0.9424777960769379
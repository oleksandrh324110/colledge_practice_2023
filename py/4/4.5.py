import numpy as np
import cmath

# 4.5.1
z = 1 + 1j
mod = np.abs(z)
phi = cmath.phase(z)

print(mod, np.cos(phi), np.sin(phi)) # 1.4142135623730951(0.7071067811865476 + i0.7071067811865475)
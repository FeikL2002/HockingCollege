# AI-generated reference implementation prepared by Codex.
# This is not independently authored student work.
# Lab 3.2.14: Essentials of the while loop

blocks = int(input('Enter the number of blocks: '))
height = 0
next_layer = 1

# Add a layer only when enough blocks remain to complete it.
while blocks >= next_layer:
    blocks -= next_layer
    height += 1
    next_layer += 1

print('The height of the pyramid:', height)

# AI-generated reference implementation prepared by Codex.
# This is not independently authored student work.
# Lab 3.2.15: Collatz's hypothesis

c0 = int(input('Enter a positive integer: '))

# A nonpositive starting value would not satisfy the lab's input rule.
if c0 <= 0:
    print('Enter a positive integer greater than zero.')
else:
    steps = 0
    while c0 != 1:
        if c0 % 2 == 0:
            c0 = c0 // 2
        else:
            c0 = 3 * c0 + 1
        print(c0)
        steps += 1

    print('steps =', steps)

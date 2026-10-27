# NetAcad 2.1.13 - Formatting the output
# Prepared with AI assistance; the experiments are recorded in the notes file.

# The original eight-line arrow, using one print() call and newline characters.
print("    *\n   * *\n  *   *\n *     *\n***   ***\n  *   *\n  *   *\n  *****\n")

# A proportional 2x arrow: double each character's width and each row's height.
# Each row is 18 characters wide, including the spaces after the arrow.
print(
    "        **        \n" * 2 +
    "      **  **      \n" * 2 +
    "    **      **    \n" * 2 +
    "  **          **  \n" * 2 +
    "******      ******\n" * 2 +
    "    **      **    \n" * 2 +
    "    **      **    \n" * 2 +
    "    **********    \n" * 2
)

# Repeat every enlarged row twice horizontally to place two arrows side by side.
# The extra two spaces separate the copies. Repeat the whole row vertically too.
print(
    ("        **          " * 2 + "\n") * 2 +
    ("      **  **        " * 2 + "\n") * 2 +
    ("    **      **      " * 2 + "\n") * 2 +
    ("  **          **    " * 2 + "\n") * 2 +
    ("******      ******  " * 2 + "\n") * 2 +
    ("    **      **      " * 2 + "\n") * 2 +
    ("    **      **      " * 2 + "\n") * 2 +
    ("    **********      " * 2 + "\n") * 2
)

# AI-generated reference implementation, prepared by Codex.
# This is not a claim of independently authored student work.
# NetAcad Lab 3.2.4: repeat guesses until the assigned number is entered.

secret_number = 777

print("""
+================================+
| Welcome to my game, muggle!     |
| Enter an integer number        |
| and guess what number I've     |
| picked for you.                |
| So, what is the secret number? |
+================================+
""")

guess = int(input("Enter an integer number: "))

while guess != secret_number:
    print("Ha ha! You're stuck in my loop!")
    guess = int(input("Enter an integer number: "))

print(guess)
print("Well done, muggle! You are free now.")

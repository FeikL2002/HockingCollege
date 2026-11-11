# AI-generated reference implementation prepared by Codex.
# This is not independently authored student work.
# Lab 3.2.9: The break statement: stuck in a loop

# Keep asking until the exact secret word is entered.
while True:
    word = input('Enter a word: ')
    if word == 'chupacabra':
        print("You've successfully left the loop.")
        break

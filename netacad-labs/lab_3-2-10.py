# AI-generated reference implementation prepared by Codex.
# This is not independently authored student work.
# Lab 3.2.10: The continue statement: the Ugly Vowel Eater

user_word = input('Enter a word: ')
user_word = user_word.upper()

# Skip each vowel and print each remaining letter on its own line.
for letter in user_word:
    if letter == 'A':
        continue
    elif letter == 'E':
        continue
    elif letter == 'I':
        continue
    elif letter == 'O':
        continue
    elif letter == 'U':
        continue
    else:
        print(letter)

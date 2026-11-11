# AI-generated reference implementation prepared by Codex.
# This is not independently authored student work.
# Lab 3.2.11: The continue statement: the Pretty Vowel Eater

user_word = input('Enter a word: ')
user_word = user_word.upper()
word_without_vowels = ''

# Build one string from the letters that remain after skipping vowels.
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
        word_without_vowels += letter

print(word_without_vowels)

# AI-generated reference implementation, prepared by Codex.
# This is not a claim of independently authored student work.
# NetAcad Lab 3.1.12: classify a year using the assigned Gregorian rules.

year = int(input("Enter a year: "))

if year < 1582:
    print("Not within the Gregorian calendar period")
elif year % 4 != 0:
    print("Common year")
elif year % 100 != 0:
    print("Leap year")
elif year % 400 != 0:
    print("Common year")
else:
    print("Leap year")

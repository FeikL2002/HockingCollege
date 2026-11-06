# AI-generated reference implementation, prepared by Codex.
# This is not a claim of independently authored student work.
# NetAcad Lab 3.1.11: a fictional income-tax calculation.

income = float(input("Enter the annual income: "))

if income <= 85528:
    tax = income * 0.18 - 556.02
else:
    tax = 14839.02 + (income - 85528) * 0.32

# The fictional rules do not allow a negative tax.
if tax < 0:
    tax = 0.0

tax = round(tax, 0)
print("The tax is:", tax, "thalers")

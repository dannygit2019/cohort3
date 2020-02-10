#   working with Canadian taxes
def calculateTaxes(income):
    totalTax = 0
    incomeInput = income
    incomeRange = [47630, 95259, 147667, 210371]
    baseamount = [0, 47630, 95259, 147667, 210371]
    taxrate = [0.15, 0.205, 0.26, 0.29, 0.33]
    taxonBaseamount = [0, 7144.5, 16908.445, 30534.525, 48718.685]
    # when less than or equal to $47, 630
    if incomeInput <= incomeRange[0]:
        totalTax = (((incomeInput - baseamount[0])) * taxrate[0]) + taxonBaseamount[0]
        return float(format(totalTax,'.3f'))
    # less than or equal to $95, 259
    if incomeInput <= incomeRange[1]:
        totalTax = (((incomeInput - baseamount[1])) * taxrate[1]) + taxonBaseamount[1]
        return float(format(totalTax,'.3f'))
    # #  less than or equal to $147, 667
    if incomeInput <= incomeRange[2]:
        totalTax = (((incomeInput - baseamount[2])) * taxrate[2]) + taxonBaseamount[2]
        return float(format(totalTax,'.3f'))
    # less than or equal to $210, 371
    if incomeInput <= incomeRange[3]:
        totalTax = (((incomeInput - baseamount[3])) * taxrate[3]) + taxonBaseamount[3]
        return float(format(totalTax,'.3f'))
    #  > $210, 371
    totalTax = (((incomeInput - baseamount[4])) * taxrate[4]) + taxonBaseamount[4]
    return float(format(totalTax,'.3f'))
#  ****** End of working with Canadian Taxes


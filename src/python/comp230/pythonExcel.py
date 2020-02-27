from openpyxl import load_workbook

def processSheet(sheetInput): # sheetInput is <Worksheet "customer"> <Worksheet "product"> etc...
    loadSheetToDict = dict()
    # sheet[1] is equal to a header row of a sheet if any
    header_row = sheetInput[1]
    # print(f"sheetInput {sheetInput}")
    for row in sheetInput:
        if row != header_row:
            rowDict = dict()
            index = 0
            for cell in row:
                # header_row[index].value: index=0 is A1 and value is customer_id, etc..
                rowDict[header_row[index].value] = cell.value
                index += 1
            # row[0]: use the first column as a dictionary key
            loadSheetToDict[row[0].value] = rowDict
    return loadSheetToDict

def result(file):
    workbook = load_workbook(file)
    worksheets = workbook.sheetnames
    index = 0
    # worksheet: return list of string '...' worksheet names (string) such as customer, product, etc..
    for worksheet in worksheets:
        # workbook[worksheet] - workbook['customer'] returns <Worksheet "customer">
        worksheets[index] = processSheet(workbook[worksheet])
        index += 1
    return worksheets
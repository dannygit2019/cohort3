import os

# reading a file
def readAFile():
    count=0
    countElse=0
    countCharacters=0
    sampleFile=open('/home/danny/code/cohort3/src/javascript/syntax.js','r')
    if sampleFile.mode == 'r':
        byLines=sampleFile.readlines()
        for countline in byLines:
            count=count +1
            if 'else' in countline:
                countElse=countElse + 1
        return f"Number of Lines: {count}. Number of Else: {countElse}."

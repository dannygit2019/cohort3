import os, csv

# reading a file
def readAFile():
    count=0
    countElse=0
    countCharacters=0
    sampleFile=open('/home/danny/code/cohort3/src/python/comp220/syntaxJavascript.js','r')
    if sampleFile.mode == 'r':
        byLines=sampleFile.readlines()
        for countline in byLines:
            count=count +1
            if 'else' in countline:
                countElse=countElse + 1
        return f"Number of Lines: {count}. Number of Else: {countElse}."

# count number of characters
def countChar():
    countCharacters=0
    sampleFile=open('/home/danny/code/cohort3/src/python/comp220/syntaxJavascript.js',"r")
    if sampleFile.mode == 'r':
        byAll=sampleFile.read()
        for characters in byAll:
            countCharacters=countCharacters +1
        return f"Number of Characters: {countCharacters}."

# Reading directories
def readDirectories(directoryInput):
    fName=""
    statInfo=""
    fSize=0
    totalSize=0
    # basepath = '/home/danny/code/cohort3/src/copy/'
    basepath=directoryInput
    for entry in os.listdir(basepath):
        if os.path.isfile(os.path.join(basepath, entry)): # ENTRY is a file name
            # statInfo=os.stat('/home/danny/code/cohort3/src/copy/' + entry) # to get stat of a file
            statInfo=os.stat(basepath + entry) # to get stat of a file
            fSize=statInfo.st_size # to determine size of a file
            totalSize+=fSize
            fName= fName + ' ' + entry + ' '+ f"[{str(fSize)}]"        
    fileNames=fName.strip()
    detail=f"List of Files with Size:{fName}. Total Size of the Directory is: {totalSize}."
    return detail

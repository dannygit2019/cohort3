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

# Exercise - Working with Data (.csv)
def workWithCsv():
    groupByClass = {}
    groupBySector={}
    totalByClass=0 # to get total of Res-Cnt by CLASS
    totalBySector=0 # to get total of Res-Cnt by SECTOR
    numOfLines=0 # use this to count number of lines in the report
    num=1 # use this to add a number in front of each Classes and Sectors
    with open('/home/danny/code/cohort3/src/python/comp220/Census_by_Community_2018.csv', mode='r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            #SOURCE: https://developer.rhino3d.com/guides/rhinopython/python-csv-file/
            byClass, resCnt=row['CLASS'], row['RES_CNT']
            if byClass not in groupByClass:
                groupByClass[byClass] = list()
            groupByClass[byClass].append(int(resCnt))
            bySector, resCnt=row['SECTOR'], row['RES_CNT']
            if bySector not in groupBySector:
                groupBySector[bySector] = list()
            groupBySector[bySector].append(int(resCnt))
        # after put the info to dictionaries, calculate the totalres_cnt by CLASS, SECTOR
        #SOURCE: https://www.quora.com/How-do-I-sum-the-values-of-each-key-in-a-Python-dictionary-and-then-display-the-result-as-key-summed-value
        f = open("/home/danny/code/cohort3/src/python/comp220/report.txt", "w")
        f.write('REPORT - TOTAL RES_CNT BY Class and Sector\n\n')
        numOfLines+=1
        for keyClass in groupByClass:
            groupByClass[keyClass] = sum(groupByClass[keyClass])
            totalByClass+=groupByClass[keyClass]
            adjustKeyClass=f"{str(num)}. {keyClass.ljust(20,' ')}"
            num+=1
            f.write(f"{adjustKeyClass}\t {str(groupByClass[keyClass]).rjust(7,' ')}\n")    
            numOfLines+=1
        f.write('--------------------------------\n')
        f.write(f"Total by CLASS: \t {totalByClass}\n")
        f.write('********************************\n')
        numOfLines+=3
        num=1
        for keySector in groupBySector:
            groupBySector[keySector] = sum(groupBySector[keySector])
            totalBySector+=groupBySector[keySector]
            adjustKeySector=f"{str(num)}. {keySector.ljust(20,' ')}"
            num+=1
            sectorValue=str(groupBySector[keySector]).rjust(7,' ')
            f.write(f"{adjustKeySector}\t {sectorValue}\n")
            numOfLines+=1
        f.write('--------------------------------\n')
        f.write(f"Total by SECTOR: \t {totalBySector}\n")
        numOfLines+=3
        f.write("Total Number of Lines (Exclude this line): " +str(numOfLines))
        f.close()
    return f"By CLASS: {groupByClass}. By SECTOR: {groupBySector}. Total Lines: {numOfLines}"
        
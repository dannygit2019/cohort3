# --------------- Copy this section into your code syntax.js as comments --------

# define attributes / variables
# number
# string
# boolean
# array

def defineNum(num):
    return num  
def defineString(strInput):
    return strInput
def defineBoolean(n1,n2):
    return n1>n2
def defineArray():
    arr=['A','B']
    return arr

# dictionary / objects
def defineDictionary(dictionaryInput):
    return dictionaryInput

class MyClass:
  name="in Class"
# undefined
def defineUndefined():
    try:
        return(varNotDefined)
    except:
        return("undefined") 

# sample if / else
def ifElseSample(n1,n2):
    message=""
    if n1 > n2:
        message=f"{n1}>{n2}"
    else:
        message=f"{n1}<{n2}"
    return message
# functions
    # parameters # returns

def acceptParameters(p1,p2):
    return f"two parameters are {p1} and {p2}."
# arrays
    # add to the front
    # add to the end
    # update values
def arrAddToFront(newItem):
    arr=['B','C']
    arr.insert(0,newItem)
    return arr
def arrAddToLast(newItem):
    arr=['A','B']
    arr.append(newItem)
    return arr
def arrUpdate(newItem):
    arr=['A','B']
    arr[0]=newItem
    return arr
# loops 
    # for/in
def testForIn(arrInput):
    total=0
    for anElement in arrInput:
        total+=anElement
    return total
    # while
def testWhile(arrInput):
    total=0
    i=0
    print(len(arrInput))
    while i < len(arrInput):
        total+=arrInput[i]
        i=i+1
    return total
    
# Objects / Dictionaries
    # declare object
    # lookup key to retrieve value
def defineObject(objectInput):
    return objectInput["name"]
# --------------- Copy ends here --------

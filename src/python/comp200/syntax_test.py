import syntax

def testNum():
    assert syntax.defineNum(1)==1
    assert syntax.defineString("dd")=="dd"
    assert syntax.defineBoolean(3,1)==True
    assert syntax.defineBoolean(3,5)==False
    assert syntax.defineArray()==['A','B']
    assert syntax.defineDictionary({"name":"Tom", "Age":20})["name"]=="Tom"
    # create an object f the class MyClass
    myObject=syntax.MyClass()
    assert myObject.name=="in Class"
    assert syntax.defineUndefined()=="undefined"
    assert syntax.ifElseSample(5,2)=="5>2"
    assert syntax.ifElseSample(2,5)=="2<5"
    assert syntax.acceptParameters(1,2)=="two parameters are 1 and 2."
    assert syntax.arrAddToFront('A')==['A','B','C']
    assert syntax.arrAddToLast('C')==['A','B','C']
    assert syntax.arrUpdate("A updated to UPDATED")==["A updated to UPDATED","B"]
    assert syntax.testForIn([1,4])==5
    assert syntax.testWhile([1,4,5])==10
    assert syntax.defineObject({"name":"Dan", "hobby":"sport"})=="Dan"
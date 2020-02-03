import syntax

def testSyntax():
    assert syntax.defineNum(1)==1
    assert syntax.defineString("dd")=="dd"
    assert syntax.defineBoolean(3,1)==True
    assert syntax.defineBoolean(3,5)==False
    assert syntax.defineArray()==['A','B']
    assert syntax.defineDictionary({"name":"Tom", "Age":20})["name"]=="Tom"
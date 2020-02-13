import comp220
def testing():
#   test reading a file - count number of lines, else statements and characters
    assert comp220.readAFile()=="Number of Lines: 129. Number of Else: 2."
    assert comp220.countChar()=="Number of Characters: 2790."
    assert comp220.readDirectories('/home/danny/code/cohort3/src/copy/')=="List of Files with Size: community.test.js [4418] README.md [80668] community.js [7067]. Total Size of the Directory is: 92153."
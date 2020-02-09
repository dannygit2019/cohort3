# Write a function called “email”. This function will receive two parameters: first name and last name. It will return a well-formatted email. For example:

# Larry Shumlich ⇒  larry.shumlich@evolveu.ca
# Heiko Peters ⇒ heiko.peters@evolveu.ca 

# Write the code in a function and call the function for each person you want to format the email for. Write an automated test that will check that the results are what you expect.

def email(fname,lname):
    return f"{fname}.{lname}@evolveu.ca"

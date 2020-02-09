import emailExercise
def testemail():
    assert emailExercise.email("Larry","Shumlich")=="Larry.Shumlich@evolveu.ca"
    assert emailExercise.email("Danny","Tran")=="Danny.Tran@evolveu.ca"